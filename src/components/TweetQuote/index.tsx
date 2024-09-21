import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';

export interface Props {
  url: string;
  handle: string;
  name: string;
  job: string;
  children: ReactNode;
}

export default function TweetQuote({
  url,
  handle,
  name,
  job,
  children,
}: Props): JSX.Element {
  const avatar = `https://unavatar.io/twitter/${handle}`;
  const profileUrl = `https://twitter.com/${handle}`;

  return (
    <figure className="mx-4 my-12 tweetQuote">
      <blockquote className="relative mb-2 text-center font-light text-lg leading-relaxed">
        <Link to={url} className="text-emphasis-900 hover:text-emphasis-900">
          {children}
        </Link>
        <span className="absolute text-gray-200 text-6xl w-12 h-12 font-cursive leading-none" style={{ top: '-1.1rem', left: '-2.4rem' }}>
          “
        </span>
        <span className="absolute text-gray-200 text-6xl w-12 h-12 font-cursive leading-none" style={{ bottom: '-1.1rem', right: '-1.6rem' }}>
          ”
        </span>
      </blockquote>
      <figcaption>
        <Link to={profileUrl} rel="nofollow" className="flex items-center">
          <img
            alt={name}
            className="rounded-full w-10 h-10 mr-3"
            src={avatar}
          />
          <div>
            <strong className="block">
              <cite className="not-italic">{name}</cite>
            </strong>
            <small className="text-gray-600">{job}</small>
          </div>
        </Link>
      </figcaption>
    </figure>
  );
}