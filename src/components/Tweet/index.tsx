import React, { type ReactNode } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Github,
  Quote,
} from "lucide-react";

import Link from "@docusaurus/Link";

import "./Tweet.css";

export interface Props {
  url: string;
  handle: string;
  name: string;
  content: ReactNode;
  date: string;
  githubUsername?: string;
}

export default function Tweet({
  url,
  handle,
  name,
  content,
  date,
  githubUsername,
}: Props): JSX.Element {
  const avatarUrl = githubUsername
    ? `https://github.com/${githubUsername}.png?size=96`
    : undefined;

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className="tweet-card">
      {/* Decorative quote */}
      <div className="tweet-card__quote" aria-hidden="true">
        <Quote size={20} />
      </div>

      {/* Header */}
      <header className="tweet-card__header">
        <div className="tweet-card__identity">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt=""
              className="tweet-card__avatar"
              width={48}
              height={48}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div
              className="tweet-card__avatar tweet-card__avatar--fallback"
              aria-hidden="true"
            >
              {initials || "CH"}
            </div>
          )}

          <div className="tweet-card__user">
            <strong className="tweet-card__name">{name}</strong>

            <span className="tweet-card__handle">
              @{handle}
            </span>
          </div>
        </div>

        {githubUsername && (
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-card__github"
            aria-label={`${name} on GitHub`}
          >
            <Github size={17} aria-hidden="true" />
          </a>
        )}
      </header>

      {/* Content */}
      <div className="tweet-card__content">
        {content}
      </div>

      {/* Footer */}
      <footer className="tweet-card__footer">
        <div className="tweet-card__date">
          <CalendarDays size={14} aria-hidden="true" />
          <time>{date}</time>
        </div>

        <Link
          to={url}
          className="tweet-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View post</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </footer>
    </article>
  );
}