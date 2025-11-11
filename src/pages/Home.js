import { useQuery } from '@tanstack/react-query'
import { Spin } from "antd";
import React, { useState } from 'react'
import { allMovies, searchByTitle, movieById } from '../api/api'
import Card from "../component/Card"
import Navigation from "../component/NavigationBar";
import PopupCard from '../component/PopupCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  //for get all the movies data
  const { data: allMoviesData, isLoading: loadingAll, isError: errorAll, error: allError, status } = useQuery({
    queryKey: ["posts"],
    queryFn: allMovies,
  });

  //for search ny title 
  const { data: searchedData, isLoading: loadingSearch, isError: errorSearch, error: searchError, status: searchStatus } = useQuery({
    queryKey: ["searchedTitle", searchQuery],
    queryFn: () => searchByTitle(searchQuery),
    enabled: !!searchQuery,
    retry: false,
  });


  // for popup mobie by Id
  const { data: movieData, isLoading: loading } = useQuery({
    queryKey: ["movieDetail", selectedMovie],
    queryFn: () => movieById(selectedMovie),
    enabled: !!selectedMovie,

  })

  const displayData = searchQuery ? searchedData : allMoviesData

  const handleCardClick = (movieId) => {
    setSelectedMovie(movieId);
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
    setSelectedMovie(null);

  }

  return (
    <>
      <Navigation onSearch={setSearchQuery} />
      <div className="mx-auto px-4 mt-8">
        {(loadingAll || loadingSearch) ? (
          <div className="flex justify-center items-center h-[70vh]">
            <Spin size="large" />
          </div>
        ) : (
          <>
            {(allError || errorSearch) && (
              <p className="text-red-500 text-center mb-4">
                {allError?.Error || searchError?.Error || "Movie not found"}
              </p>
            )}

            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mt-8">
              {displayData?.map((post) => (
                <Card
                  key={post.imdbID}
                  title={post.Title}
                  image={post.Poster}
                  type={post.Type}
                  year={post.Year}
                  onClick={() => handleCardClick(post.imdbID)}
                />
              ))}
            </div>
          </>
        )}

        {loading && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <Spin size="large" />
          </div>
        )}

        {showPopup && selectedMovie && movieData && (
          <PopupCard
            image={movieData.Poster}
            title={movieData.Title}
            rating={movieData.imdbRating}
            imdbId={movieData.imdbID}
            year={movieData.Year}
            rated={movieData.Rated}
            released={movieData.Released}
            genre={movieData.Genre?.split(", ")}
            director={movieData.Director}
            writer={movieData.Writer?.split(", ")}
            actors={movieData.Actors?.split(", ")}
            plot={movieData.Plot}
            language={movieData.Language}
            countrytype={movieData.Country}
            runtime={movieData.Runtime}
            onClose={closePopup}
          />
        )}
      </div>

    </>
  );
}
export default Home
