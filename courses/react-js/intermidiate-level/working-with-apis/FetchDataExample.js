import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchDataExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetch Data Example</h2>
      {loading ? <p>Loading...</p> : (
        error ? <p>Error: {error}</p> : (
          <ul>
            {data?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export default FetchDataExample;