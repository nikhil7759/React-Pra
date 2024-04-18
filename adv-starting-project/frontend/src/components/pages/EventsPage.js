import React, { useState, useEffect } from "react";

const EventsPage = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://testing-b19d7-default-rtdb.firebaseio.com/events/0.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setPokemonData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>hello</h1>
      {pokemonData && (
        <div>
          <h2>Pokemon Data</h2>
          <ul>
            {Object.entries(pokemonData).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default EventsPage;
