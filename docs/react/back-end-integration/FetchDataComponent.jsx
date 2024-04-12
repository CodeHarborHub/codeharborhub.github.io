import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.github.com/users/Ajay-Dhangar');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error fetching data: {error.message}</p>}
      {userData && (
        <div>
          <p><b>Username:</b> {userData.login}</p>
          <p><b>Name:</b> {userData.name}</p>
          <p><b>Followers:</b> {userData.followers}</p>
        </div>
      )}
    </div>
  );
}

export default FetchDataComponent;