import React, { useState, useEffect } from 'react';

interface AuthorProps {
  username: string;
}

const Author: React.FC<AuthorProps> = ({ username }) => {
  const [authorData, setAuthorData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch author data');
        }
        return response.json();
      })
      .then((data) => {
        setAuthorData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [username]);

  if (isLoading) {
    return <div className="italic text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 font-bold">Error: {error}</div>;
  }

  return (
    <div className="flex items-center mb-4">
      <a
        href={authorData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-inherit no-underline hover:opacity-80"
      >
        <img
          src={authorData.avatar_url}
          alt={authorData.name || authorData.login}
          className="w-12 h-12 rounded-full mr-3"
        />
        <span className="font-bold">{authorData.name || authorData.login}</span>
      </a>
    </div>
  );
};

export default Author;
