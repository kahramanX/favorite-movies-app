import PopularMovieList from "./PopularMovieList/PopularMovieList.js";
import UpComingMovieList from "./UpComingMovieList/UpComingMovieList.js";
import TopRatedMovieList from "./TopRatedMovieList/TopRatedMovieList.js";

function AllComponentsOfMovieLists() {
  return (
    <>
      <PopularMovieList />
      <UpComingMovieList />
      <TopRatedMovieList />
    </>
  );
}

export default AllComponentsOfMovieLists;
