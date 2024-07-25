import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface AuthorProps {
  username: string;
}

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const AuthorLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-weight: bold;
`;

const Loading = styled.div`
  font-style: italic;
  color: #666;
`;

const Error = styled.div`
  color: red;
  font-weight: bold;
`;

const Author: React.FC<AuthorProps> = ({ username }) => {
  const [authorData, setAuthorData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch author data');
        }
        return response.json();
      })
      .then(data => {
        setAuthorData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [username]);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>Error: {error}</Error>;
  }

  return (
    <AuthorContainer>
      <AuthorLink href={authorData.html_url} target="_blank" rel="noopener noreferrer">
        <Avatar src={authorData.avatar_url} alt={authorData.name} />
        <AuthorName>{authorData.name || authorData.login}</AuthorName>
      </AuthorLink>
    </AuthorContainer>
  );
};

export default Author;