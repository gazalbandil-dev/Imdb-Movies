import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { allMovies, searchByTitle } from '../api/api'
import Card from "../component/Card"
import Navigation from "../component/NavigationBar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

  const displayData = searchQuery ? searchedData : allMoviesData

  // console.log(postData,isLoading,error,status);

  return (
    <>
      <Navigation onSearch={setSearchQuery} />
      <div className="container flex flex-wrap justify-center gap-4">
        {(loadingAll || loadingSearch) && <p>Loading....</p>}
        {(allError || errorSearch) && (
          <p className="text-red-500">
            {allError?.Error ||searchError?.Error || "Movie not found"}
          </p>
        )}
        {/* show the movies when loading ends */}
        {(!loadingAll && !loadingSearch && displayData?.length > 0 &&
          (displayData?.map((post) => {
            return (<Card
              key={post.imdbID}
              title={post.Title}
              image={post.Poster}
              type={post.Type}
              year={post.Year} />
            );
          })))}

      </div>
    </>
  )
}
export default Home
