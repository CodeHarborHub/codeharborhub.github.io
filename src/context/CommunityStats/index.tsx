import React, {
  createContext,
  type FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ICommunityStatsContext {
  githubStarCount: number;
  githubStarCountText: string;

  githubContributorsCount: number;
  githubContributorsCountText: string;

  githubForksCount: number;
  githubForksCountText: string;

  loading: boolean;
  error: string | null;

  refetch: () => Promise<void>;
}

const GITHUB_REPO =
  "CodeHarborHub/codeharborhub.github.io";

const GITHUB_API =
  `https://api.github.com/repos/${GITHUB_REPO}`;

export const CommunityStatsContext = createContext<
  ICommunityStatsContext | undefined
>(undefined);

interface GitHubRepositoryResponse {
  stargazers_count?: number;
  forks_count?: number;
}

interface GitHubContributor {
  login?: string;
  contributions?: number;
}

/**
 * Fetch the total number of contributors.
 *
 * GitHub's repository endpoint doesn't directly expose a
 * contributor count, so we use the contributors endpoint
 * with `per_page=1` and read GitHub's pagination metadata.
 */
const fetchContributorCount = async (
  signal: AbortSignal
): Promise<number> => {
  const response = await fetch(
    `${GITHUB_API}/contributors?per_page=1&anon=true`,
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
      },
      signal,
    }
  );

  if (!response.ok) {
    throw new Error(
      `Unable to fetch contributors (${response.status})`
    );
  }

  const contributors: GitHubContributor[] =
    await response.json();

  const linkHeader = response.headers.get("Link");

  if (linkHeader) {
    const lastPageMatch = linkHeader.match(
      /[?&]page=(\d+)>;\s*rel="last"/
    );

    if (lastPageMatch) {
      return Number(lastPageMatch[1]);
    }
  }

  return contributors.length;
};

export const CommunityStatsProvider: FC<
  React.PropsWithChildren
> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [githubStarCount, setGithubStarCount] =
    useState(0);

  const [
    githubContributorsCount,
    setGithubContributorsCount,
  ] = useState(0);

  const [githubForksCount, setGithubForksCount] =
    useState(0);

  const fetchGithubCount = useCallback(
    async (signal?: AbortSignal) => {
      const controller =
        signal ? undefined : new AbortController();

      const requestSignal =
        signal ?? controller!.signal;

      try {
        setLoading(true);
        setError(null);

        const [repositoryResponse, contributorCount] =
          await Promise.all([
            fetch(GITHUB_API, {
              method: "GET",
              headers: {
                Accept:
                  "application/vnd.github+json",
              },
              signal: requestSignal,
            }),

            fetchContributorCount(requestSignal),
          ]);

        if (!repositoryResponse.ok) {
          throw new Error(
            `Unable to fetch repository data (${repositoryResponse.status})`
          );
        }

        const repository: GitHubRepositoryResponse =
          await repositoryResponse.json();

        setGithubStarCount(
          repository.stargazers_count ?? 0
        );

        setGithubForksCount(
          repository.forks_count ?? 0
        );

        setGithubContributorsCount(
          contributorCount
        );
      } catch (err) {
        if (
          err instanceof DOMException &&
          err.name === "AbortError"
        ) {
          return;
        }

        console.error(
          "Failed to fetch CodeHarborHub GitHub statistics:",
          err
        );

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load community statistics."
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const controller = new AbortController();

    void fetchGithubCount(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetchGithubCount]);

  const githubStarCountText = useMemo(
    () => convertStatToText(githubStarCount),
    [githubStarCount]
  );

  const githubContributorsCountText = useMemo(
    () => convertStatToText(githubContributorsCount),
    [githubContributorsCount]
  );

  const githubForksCountText = useMemo(
    () => convertStatToText(githubForksCount),
    [githubForksCount]
  );

  const value = useMemo<ICommunityStatsContext>(
    () => ({
      githubStarCount,
      githubStarCountText,

      githubContributorsCount,
      githubContributorsCountText,

      githubForksCount,
      githubForksCountText,

      loading,
      error,

      refetch: async () => {
        await fetchGithubCount();
      },
    }),
    [
      githubStarCount,
      githubStarCountText,
      githubContributorsCount,
      githubContributorsCountText,
      githubForksCount,
      githubForksCountText,
      loading,
      error,
      fetchGithubCount,
    ]
  );

  return (
    <CommunityStatsContext.Provider value={value}>
      {children}
    </CommunityStatsContext.Provider>
  );
};

export const useCommunityStatsContext =
  (): ICommunityStatsContext => {
    const context = useContext(
      CommunityStatsContext
    );

    if (!context) {
      throw new Error(
        "useCommunityStatsContext must be used within CommunityStatsProvider"
      );
    }

    return context;
  };

export const convertStatToText = (
  num: number
): string => {
  if (!Number.isFinite(num)) {
    return "0";
  }

  if (
    typeof Intl !== "undefined" &&
    typeof Intl.NumberFormat === "function"
  ) {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumSignificantDigits: 3,
    }).format(num);
  }

  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }

  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }

  return String(num);
};