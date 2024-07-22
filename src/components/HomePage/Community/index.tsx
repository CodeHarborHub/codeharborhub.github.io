import React, { type FC, useEffect, useState } from "react";
import { useCommunityStatsContext } from "../../../context/CommunityStats";
import "./LandingCommunity.css";  

type Props = {
  className?: string;
};

export const LandingCommunity: FC<Props> = ({ className }) => {
  const { githubStarCountText } = useCommunityStatsContext();  
  const [state, setState] = useState({ 
    stat0: 0, 
    stat1: 0, 
    stat2: 0, 
    stat3: 0,  
  });

  const generateList = () => [
    {
      stat: Number(githubStarCountText)>0?githubStarCountText:83,
      description: "Stars on our GitHub repository, showcasing our community's support and contribution.",
      href: "https://github.com/CodeHarborHub/codeharborhub.github.io",
    },
    {
      stat: 30,
      description: "Live projects on CodeHarborHub, demonstrating the power of open-source collaboration.",
    },
    {
      stat: 100,
      description: "Active developers engaged in our vibrant open-source community, collaborating and innovating.",
    },
    {
      stat: 600,
      description: "Active learners in the CodeHarborHub community, continuously expanding their knowledge and skills.",
    },
  ];

  const handleDynamicChange = (target, index) => {
    let count = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      count += increment;
      setState(prev => ({ ...prev, [`stat${index}`]: Math.round(count) }));
      if (count >= target) {
        setState(prev => ({ ...prev, [`stat${index}`]: target }));
        clearInterval(interval);
        setTimeout(() => {
          handleDynamicChange(target, index);
        }, 3000);
      }
    }, 20);
  };

  useEffect(() => {
    console.log('worked')
    const list = generateList();
    list.forEach((item, index) => {
      handleDynamicChange(item.stat, index);
    });
  },[githubStarCountText]);

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
          {generateList().map((item, index) => (
            <span key={index} className="landing-community__stat-item">
              <div className="landing-community__stat-value">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {`${state[`stat${index}`]}${index !== 0 ? "+" : ""}`}
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
