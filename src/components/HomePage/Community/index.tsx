import React, {
  type FC,
  useEffect,
  useState,
} from "react";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  GitFork,
  Github,
  Heart,
  Star,
  Users,
} from "lucide-react";

import { useCommunityStatsContext } from "../../../context/CommunityStats";

import "./LandingCommunity.css";

type Props = {
  className?: string;
};

interface CommunityStat {
  value: number;
  formattedValue: string;
  label: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

const GITHUB_REPO_URL =
  "https://github.com/CodeHarborHub/codeharborhub.github.io";

const GITHUB_ORG_URL =
  "https://github.com/CodeHarborHub";

const GITHUB_CONTRIBUTORS_URL =
  `${GITHUB_REPO_URL}/graphs/contributors`;

const GITHUB_STARS_URL =
  `${GITHUB_REPO_URL}/stargazers`;

const GITHUB_FORKS_URL =
  `${GITHUB_REPO_URL}/network/members`;

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

const useCountUp = (
  target: number,
  duration = 1200
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!Number.isFinite(target) || target <= 0) {
      setCount(0);
      return;
    }

    let animationFrame = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Ease-out cubic
      const eased =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.round(target * eased)
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target, duration]);

  return count;
};

const StatCard: FC<{
  stat: CommunityStat;
  index: number;
}> = ({ stat, index }) => {
  const Icon = stat.icon;

  const animatedValue = useCountUp(
    stat.value,
    1000 + index * 120
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="landing-community__stat"
    >
      <Link
        to={stat.href}
        target="_blank"
        rel="noopener noreferrer"
        className="landing-community__stat-link"
        aria-label={`${stat.label}: ${stat.value}`}
      >
        <div className="landing-community__stat-top">
          <div className="landing-community__stat-icon">
            <Icon
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <ArrowUpRight
            size={17}
            className="landing-community__stat-arrow"
            aria-hidden="true"
          />
        </div>

        <div className="landing-community__stat-value">
          {formatNumber(animatedValue)}
        </div>

        <h3>{stat.label}</h3>

        <p>{stat.description}</p>
      </Link>
    </motion.div>
  );
};

export const LandingCommunity: FC<Props> = ({
  className = "",
}) => {
  const {
    githubStarCount,
    githubStarCountText,
    githubContributorsCount,
    githubContributorsCountText,
    githubForksCount,
    githubForksCountText,
    loading,
  } = useCommunityStatsContext();

  const stats: CommunityStat[] = [
    {
      value: githubStarCount,
      formattedValue: githubStarCountText,
      label: "GitHub Stars",
      description:
        "Developers supporting and starring our open-source work.",
      href: GITHUB_STARS_URL,
      icon: Star,
    },
    {
      value: githubContributorsCount,
      formattedValue:
        githubContributorsCountText,
      label: "Contributors",
      description:
        "Developers helping improve the CodeHarborHub ecosystem.",
      href: GITHUB_CONTRIBUTORS_URL,
      icon: Users,
    },
    {
      value: githubForksCount,
      formattedValue: githubForksCountText,
      label: "Forks",
      description:
        "Community members extending and experimenting with our work.",
      href: GITHUB_FORKS_URL,
      icon: GitFork,
    },
  ];

  return (
    <section
      className={`landing-community ${className}`}
      aria-labelledby="community-heading"
    >
      {/* Background */}
      <div
        className="landing-community__background"
        aria-hidden="true"
      >
        <div className="landing-community__glow landing-community__glow--one" />
        <div className="landing-community__glow landing-community__glow--two" />

        <div className="landing-community__grid">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="community-grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.15"
                />
              </pattern>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#community-grid)"
            />
          </svg>
        </div>
      </div>

      <div className="landing-community__container">
        {/* Header */}
        <motion.div
          className="landing-community__header"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <div className="landing-community__heading">
            <div className="landing-community__eyebrow">
              <Users
                size={14}
                aria-hidden="true"
              />
              <span>Community Powered</span>
            </div>

            <h2 id="community-heading">
              Built by developers.
              <span> Powered by community.</span>
            </h2>

            <p>
              CodeHarborHub grows because developers,
              learners, contributors, and open-source
              enthusiasts build it together.
            </p>
          </div>

          <Link
            to={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="landing-community__github-button"
          >
            <Github
              size={18}
              aria-hidden="true"
            />
            <span>Explore GitHub</span>
            <ArrowUpRight
              size={16}
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="landing-community__layout">
          {/* Stats */}
          <div className="landing-community__stats">
            {loading
              ? [0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className="landing-community__stat landing-community__stat--loading"
                  >
                    <div className="landing-community__skeleton landing-community__skeleton--icon" />
                    <div className="landing-community__skeleton landing-community__skeleton--number" />
                    <div className="landing-community__skeleton landing-community__skeleton--title" />
                    <div className="landing-community__skeleton landing-community__skeleton--text" />
                  </div>
                ))
              : stats.map((stat, index) => (
                  <StatCard
                    key={stat.label}
                    stat={stat}
                    index={index}
                  />
                ))}
          </div>

          {/* Community visual */}
          <motion.div
            className="landing-community__visual"
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <div className="landing-community__visual-glow" />

            <div className="landing-community__visual-card">
              <div className="landing-community__visual-image">
                <img
                  src="/img/svg/team_collaboration.svg"
                  alt="Developers collaborating on CodeHarborHub"
                  loading="lazy"
                />
              </div>

              <div className="landing-community__visual-content">
                <div className="landing-community__visual-icon">
                  <Code2
                    size={20}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>OPEN SOURCE</span>

                  <h3>
                    Learn together.
                    <br />
                    Build together.
                  </h3>
                </div>
              </div>

              <div className="landing-community__visual-footer">
                <div className="landing-community__avatars">
                  <span>CH</span>
                  <span>OS</span>
                  <span>+</span>
                </div>

                <div className="landing-community__heart">
                  <Heart
                    size={15}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                  <span>Made with community</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          className="landing-community__footer"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <p>
            Every star, contribution, issue, pull request,
            and idea helps us make technology education
            more accessible.
          </p>

          <Link
            to={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Contribute to CodeHarborHub</span>
            <ArrowUpRight
              size={15}
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingCommunity;