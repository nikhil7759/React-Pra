import React, { useState } from "react";

import MovieList from "./components/MoviesList";
import "./App.css";

function App() {
  const [clickHandler, setClickHandler] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchDataHandler() {
    setIsLoading(true);
    const responses = await fetch(
      "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple"
    );
    const datas = await responses.json();

    const hello = datas.results.map((films) => {
      return {
        title: films.question,
        releaseDate: films.correct_answer,
        openingText: films.incorrect_answers,
      };
    });
    setClickHandler(hello);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchDataHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MovieList movies={clickHandler} />}
        {isLoading && <p>Loading....... </p>}
      </section>
    </React.Fragment>
  );
}

export default App;
