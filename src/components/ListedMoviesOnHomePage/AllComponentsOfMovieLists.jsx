import PopularMovieList from "./PopularMovieList/PopularMovieList";
import UpComingMovieList from "./UpComingMovieList/UpComingMovieList";
import TopRatedMovieList from "./TopRatedMovieList/TopRatedMovieList";

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
