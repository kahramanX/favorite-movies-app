import TopMovieList from "./TopMovieList/TopMovieList.js";
import UpComingMovieList from "./UpComingMovieList/UpComingMovieList.js";
import TopRatedMovieList from "./TopRatedMovieList/TopRatedMovieList.js";

function AllComponentsOfMovieLists() {
  return (
    <>
      <TopMovieList />
      <UpComingMovieList />
      <TopRatedMovieList />
    </>
  );
}

export default AllComponentsOfMovieLists;
