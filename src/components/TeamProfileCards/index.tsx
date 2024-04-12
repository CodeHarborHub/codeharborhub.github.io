/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

function WebsiteLink({ to, children }: { to: string; children?: ReactNode }) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl: string;
  twitterUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  twitterUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <br />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {twitterUrl && (
              <Link className="button button--secondary" href={twitterUrl}>
                Twitter
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Ajay Dhangar"
        githubUrl="https://github.com/ajay-dhangar"
        twitterUrl="https://twitter.com/CodesWithAjay"
      >
        <Translate
          id="team.profile.Sebastien Lorber.body"
          values={{
            website: <WebsiteLink to="https://cmhq.tech" />,
            devto: <Link to="https://dev.to/ajaydhangar49">Dev.to</Link>,
          }}
        >
          {
            "Fullstack developer, open source enthusiast, and tech blogger. He loves to contribute to open source and write articles on his {website} and {devto}."
          }
        </Translate>
      </TeamProfileCardCol>

      {/* other team members */}
    </div>
  );
}

export function HonoraryAlumniTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Shivay"
        githubUrl="https://github.com/shivay-coding"
      >
        <Translate id="team.profile.Shivay.body">
          A passionate developer who loves to contribute to open source and
          write articles on his blog.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}

export function StudentFellowsTeamRow(): JSX.Element {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Narendra Dhangar"
        githubUrl="https://github.com/Narendra-Dhangar"
      >
        <Translate
          id="team.profile.Anshul Goyal.body"
          values={{
            websiteLink: (
              <Link href="/">
                <Translate id="team.profile.Narendra Dhangar.body.websiteLink.label">
                  website
                </Translate>
              </Link>
            ),
          }}
        >
          {
            "B.Tech student, open source enthusiast, and tech blogger. He loves to contribute to open source and write articles on his {websiteLink}."
          }
        </Translate>
      </TeamProfileCardCol>      
    </div>
  );
}
