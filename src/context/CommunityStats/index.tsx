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
    githubCommitCount: number;
    discordMemberCount: number;
    discordMemberCountText: string;
    loading: boolean;
    refetch: () => Promise<void>;
  }

  export const CommunityStatsContext = createContext<
    ICommunityStatsContext | undefined
  >(undefined);

  export const CommunityStatsProvider: FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [githubStarCount, setGithubStarCount] = useState(0);
    const [githubCommitCount, setGithubCommitCount] = useState(0);
    const [discordMemberCount, setDiscordMemberCount] = useState(0);

    const fetchGithubCount = useCallback(async (signal: AbortSignal) => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.github.com/repos/CodeHarborHub/codeharborhub.github.io",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            signal,
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setGithubStarCount(json.stargazers_count || 0);
        setGithubCommitCount(json.commits_count || 0);
        setDiscordMemberCount(10);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }, []);

    useEffect(() => {
      const abortController = new AbortController();
      fetchGithubCount(abortController.signal);

      return () => {
        abortController.abort();
      };
    }, [fetchGithubCount]);

    const githubStarCountText = useMemo(() => {
      return convertStatToText(githubStarCount);
    }, [githubStarCount]);

    const discordMemberCountText = useMemo(() => {
      return convertStatToText(discordMemberCount);
    }, [discordMemberCount]);

    const value = {
      githubStarCount,
      githubStarCountText,
      githubCommitCount,
      discordMemberCount,
      discordMemberCountText,
      loading,
      refetch: fetchGithubCount,
    };

    return (
      <CommunityStatsContext.Provider value={value}>
        {children}
      </CommunityStatsContext.Provider>
    );
  };

  export const useCommunityStatsContext = () => {
    const context = useContext(CommunityStatsContext);
    if (context === undefined) {
      throw new Error("useCommunityStatsContext must be used within a CommunityStatsProvider");
    }
    return context;
  };

  export const convertStatToText = (num: number) => {
    const hasIntlSupport =
      typeof Intl === "object" && Intl && typeof Intl.NumberFormat === "function";

    if (!hasIntlSupport) {
      return `${(num / 1000).toFixed(1)}k`;
    }

    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumSignificantDigits: 3,
    });
    return formatter.format(num);
  };
