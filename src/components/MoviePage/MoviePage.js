import { useEffect } from "react";

function MoviePage({ infoOfClickedMovie }) {
  console.log(infoOfClickedMovie);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9f2d1368e54e609b6d793560018b878a&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      <h1>HELLO BEN PAGE</h1>
    </>
  );
}

export default MoviePage;
