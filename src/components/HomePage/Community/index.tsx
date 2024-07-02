import React, { type FC, useMemo } from "react";
import { useCommunityStatsContext } from "../../../context/CommunityStats";
import "./LandingCommunity.css";

type Props = {
  className?: string;
};

export const LandingCommunity: FC<Props> = ({ className }) => {
  const { githubStarCountText } = useCommunityStatsContext();

  const list = useMemo(() => {
    return [
      {
        stat: githubStarCountText,
        description:
          "Stars on our GitHub repository, showcasing our community's support and contribution.",
        href: "https://github.com/CodeHarborHub/codeharborhub.github.io",
      },
      {
        stat: "30+",
        description:
          "Live projects on CodeHarborHub, demonstrating the power of open-source collaboration.",
      },
      {
        stat: "32K+",
        description:
          "Active developers engaged in our vibrant open-source community, collaborating and innovating.",
      },
      {
        stat: "20K+",
        description:
          "Active learners in the CodeHarborHub community, continuously expanding their knowledge and skills.",
      },
    ];
  }, [githubStarCountText]);

  return (
    <div className="landing-community">
      <div className="landing-community__header">
        <h2 className="landing-community__title">
          Discover the strength of our{" "}
          <span className="landing-community__highlight">
            amazing community
          </span>
          .
        </h2>
      </div>

      <div className="landing-community__content">
        <div className="landing-community__stats">
          {list.map((item, index) => (
            <span
              key={index}
              className="landing-community__stat-item"
            >
              <div className="landing-community__stat-value">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {item.stat}
                </a>
              </div>
              <div className="landing-community__stat-description">
                {item.description}
              </div>
            </span>
          ))}
        </div>

        <div className="landing-community__info">
          <img
            className="landing-community__image"
            src="/img/svg/team_collaboration.svg"
            alt="investors"
            loading="lazy"
          />
          <div className="landing-community__info-text">
            Our developer is the heartbeat of CodeHarborHub. We take pride in
            our{" "}
            <a
              href="https://github.com/CodeHarborHub/codeharborhub.github.io/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-community__link"
            >
              LinkedIn community
            </a>
            {" with over, "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="landing-community__link"
            >
              100+ contributors
            </a>
            {" and "}
            <a
              href="https://github.com/CodeHarborHub/codeharborhub.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-community__link"
            >
              powering CodeHarborHub
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};
