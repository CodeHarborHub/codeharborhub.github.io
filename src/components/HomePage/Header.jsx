import React from "react";
import "./header.css";
import Link from "@docusaurus/Link";

const Header = () => {
  return (
    <div className="chh__header--body">
      <div className="section__padding" id="home">
        <div className="chh__header">
          <div className="chh__header-content">
            <h1 className="gradient__text">
              Level Up Skills with CodeHarborHub
            </h1>
            <p>
              Tired of limitations? CodeHarborHub shatters them. We're the
              exclusive platform offering a comprehensive tech curriculum,
              taught by industry masters, completely free. Join our vibrant
              community, master in-demand skills, and launch your dream tech
              career.
            </p>

            <div className="chh__header-content__input">
              <button type="button">
                <Link to="/docs" className="chh__header-content__input--link">
                  Get Started
                </Link>
              </button>
              <button>
                <Link
                  to="/courses"
                  className="chh__header-content__input--link"
                >
                  Courses
                </Link>
              </button>
            </div>
          </div>
          <div className="chh__header-image">
            <img src="/img/img-5.png" alt="ai" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
