import { useQuery } from '@tanstack/react-query'
import React ,{useState} from 'react'
import { allMovies,searchByTitle} from '../api/api'
import Card from "../component/Card"
import Navigation from "../component/NavigationBar";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  //for get all the movies data
  const {data:allMoviesData,isLoading:loadingAll,isError:errorAll,error:allError,status} = useQuery({
    queryKey:["posts"],
    queryFn: allMovies,
  });

  //for search ny title 
  const {data:searchedData,isLoading:loadingSearch,isError:errorSearch,error:searchError,status:searchStatus} = useQuery({
    queryKey:["searchedTitle",searchQuery],
    queryFn: () => searchByTitle(searchQuery),
  });

  const handleSearch = (query) =>{
    setSearchQuery(query);
  }

  const displayData = searchQuery? searchedData : allMoviesData

  // console.log(postData,isLoading,error,status);

  return (
    <>
    <Navigation onSearch={handleSearch}/>
    <div className="container flex flex-wrap justify-center gap-4">
        {(loadingAll || loadingSearch) && <p>Loading....</p>}
        <p>{errorAll ? errorAll.message : errorSearch.message}</p>
        {(!loadingAll || !loadingSearch) && displayData?.map((post)=>{
            return(<Card
            key={post.imdbID}
            title={post.Title}
            image={post.Poster}
            type={post.Type}
            year={post.Year}/>
        );
        })}
    </div>
    </>
  )
}
export default Home
