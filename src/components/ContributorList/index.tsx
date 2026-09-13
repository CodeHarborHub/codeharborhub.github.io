import React, { useEffect, useMemo, useState } from "react";
import Translate from "@docusaurus/Translate";
import {
  ArrowUpRight,
  GitBranch,
  Github,
  Heart,
  Users,
} from "lucide-react";

import "./contributors.css";

type Contributor = {
  login: string;
  contributions: number;
  html_url: string;
  avatar_url: string;
  type?: string;
};

type ContributorProps = {
  contributorsPerPage?: number;
  contributorsIgnore?: string[];
};

const DEFAULT_IGNORE_CONTRIBUTORS = [
  "restyled-commits",
  "dependabot",
  "renovate",
];

const GITHUB_OWNER = "CodeHarborHub";
const GITHUB_REPO = "codeharborhub.github.io";

const ContributorList: React.FC<ContributorProps> = ({
  contributorsPerPage = 99,
  contributorsIgnore = DEFAULT_IGNORE_CONTRIBUTORS,
}) => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchContributors = async () => {
      try {
        setLoading(true);
        setError(false);

        const perPage = Math.min(
          Math.max(contributorsPerPage + contributorsIgnore.length, 1),
          100,
        );

        const response = await fetch(
          `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contributors?per_page=${perPage}`,
          {
            headers: {
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
            },
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: Contributor[] = await response.json();

        const ignored = contributorsIgnore.map((login) =>
          login.toLowerCase(),
        );

        const filtered = data
          .filter((contributor) => {
            const login = contributor.login.toLowerCase();

            return (
              !ignored.includes(login) &&
              !ignored.some((ignoredLogin) =>
                login.includes(ignoredLogin),
              )
            );
          })
          .slice(0, contributorsPerPage);

        setContributors(filtered);
      } catch (fetchError) {
        if (
          fetchError instanceof DOMException &&
          fetchError.name === "AbortError"
        ) {
          return;
        }

        console.error("Failed to fetch CodeHarborHub contributors:", fetchError);
        setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchContributors();

    return () => {
      controller.abort();
    };
  }, [contributorsPerPage, contributorsIgnore]);

  const contributorRows = useMemo(() => {
    const rows: Contributor[][] = [[], [], []];

    contributors.forEach((contributor, index) => {
      rows[index % 3].push(contributor);
    });

    return rows;
  }, [contributors]);

  const githubContributorsUrl = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/graphs/contributors`;

  return (
    <section
      className="contributors-section"
      aria-labelledby="contributors-title"
    >
      <div className="contributors-section__container">
        {/* Decorative background */}
        <div
          className="contributors-section__glow contributors-section__glow--one"
          aria-hidden="true"
        />

        <div
          className="contributors-section__glow contributors-section__glow--two"
          aria-hidden="true"
        />

        {/* Header */}
        <header className="contributors-section__header">
          <div className="contributors-section__eyebrow">
            <GitBranch size={15} aria-hidden="true" />
            <span>OPEN SOURCE COMMUNITY</span>
          </div>

          <h2
            id="contributors-title"
            className="contributors-section__title"
          >
            Built by{" "}
            <span>contributors</span>,
            powered by community.
          </h2>

          <p className="contributors-section__description">
            CodeHarborHub grows because developers, writers, designers,
            and open-source contributors come together to build something
            useful for everyone.
          </p>
        </header>

        {/* Main contributor panel */}
        <div className="contributors-section__panel">
          <div className="contributors-section__panel-header">
            <div className="contributors-section__panel-title">
              <div className="contributors-section__icon">
                <Users size={20} aria-hidden="true" />
              </div>

              <div>
                <h3>Our contributors</h3>

                <p>
                  Every contribution helps make the harbor stronger.
                </p>
              </div>
            </div>

            {!loading && !error && (
              <div className="contributors-section__count">
                <strong>{contributors.length}</strong>
                <span>featured contributors</span>
              </div>
            )}
          </div>

          {/* Loading */}
          {loading && (
            <div
              className="contributors-section__loading"
              aria-label="Loading contributors"
            >
              {[...Array(42)].map((_, index) => (
                <span
                  key={index}
                  className="contributors-section__skeleton"
                />
              ))}
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="contributors-section__error">
              <div className="contributors-section__error-icon">
                <Github size={22} aria-hidden="true" />
              </div>

              <div>
                <strong>Contributors couldn't be loaded.</strong>
                <p>
                  Please visit our GitHub repository to see the latest
                  contributor list.
                </p>
              </div>

              <a
                href={githubContributorsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contributors-section__error-link"
              >
                View on GitHub
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          )}

          {/* Contributors */}
          {!loading && !error && contributors.length > 0 && (
            <div className="contributors-section__avatars">
              {contributorRows.map((row, rowIndex) => (
                <div
                  className="contributors-section__avatar-row"
                  key={`row-${rowIndex}`}
                >
                  {row.map((contributor) => (
                    <a
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contributor-avatar"
                      key={contributor.login}
                      title={`${contributor.login} · ${contributor.contributions} contributions`}
                      aria-label={`View ${contributor.login} on GitHub`}
                    >
                      <img
                        src={contributor.avatar_url}
                        alt=""
                        loading="lazy"
                        width="48"
                        height="48"
                      />

                      <span className="contributor-avatar__tooltip">
                        <strong>{contributor.login}</strong>
                        <small>
                          {contributor.contributions} contributions
                        </small>
                      </span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Empty */}
          {!loading && !error && contributors.length === 0 && (
            <div className="contributors-section__empty">
              No contributors are currently available.
            </div>
          )}

          {/* Footer */}
          <div className="contributors-section__panel-footer">
            <div className="contributors-section__thanks">
              <Heart size={16} aria-hidden="true" />

              <span>
                <Translate
                  id="contributors.thankYouMessage"
                  description="Thank you message for CodeHarborHub contributors"
                  values={{
                    projectName: (
                      <a
                        href="https://codeharborhub.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CodeHarborHub
                      </a>
                    ),
                  }}
                >
                  {
                    "Thank you to every contributor helping {projectName} become a better place to learn, build, and collaborate."
                  }
                </Translate>
              </span>
            </div>

            <a
              href={githubContributorsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contributors-section__github-button"
            >
              <Github size={17} aria-hidden="true" />
              <span>View all contributors</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorList;