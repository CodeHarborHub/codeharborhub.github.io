import React, { type ReactNode } from "react";
import Link from "@docusaurus/Link";
export interface Props {
  url: string;
  handle: string;
  name: string;
  content: ReactNode;
  date: string;
  githubUsername: string;
}

export default function Tweet({
  url,
  handle,
  name,
  content,
  date,
  githubUsername,
}: Props): JSX.Element {
  return (
    <div className="tweet p-4 mt-4 border rounded-lg bg-transparent shadow-sm border-gray-200 dark:border-gray-800 dark:bg-gray-900">
      <div className="card__header mb-3">
        <div className="flex items-center">
          <img
            alt={name}
            className="w-12 h-12 rounded-full"
            src={`https://unavatar.io/twitter/${handle}?fallback=https://github.com/${githubUsername}.png`}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className="ml-3">
            <strong className="block text-base text-gray-900 dark:text-gray-100">
              {name}
            </strong>
            <span className="text-gray-500 dark:text-gray-300 ">@{handle}</span>
          </div>
        </div>
      </div>

      <div className="card__body mb-3 text-sm text-gray-800 dark:text-gray-100">
        {content}
      </div>

      <div className="card__footer text-right">
        <Link className="text-sm hover:underline" to={url}>
          {date}
        </Link>
      </div>
    </div>
  );
}
