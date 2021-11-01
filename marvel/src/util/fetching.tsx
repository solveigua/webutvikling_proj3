import { GET_ALL_MOVIES } from "./queries";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { disconnect } from "mongoose";

import {Movie} from '../components/Types';

type movies = {
    movies:[Movie]
}

const AllMovies = () => {
    const [movies, setMovies] = useState([])
    const { loading: movieLoading, error: movieError, data: movieData, refetch: movieRefetch } = useQuery(GET_ALL_MOVIES);

    useEffect(() => {
        setMovies(movieData?.getAllMovies)
        console.log(movieData?.getAllMovies)
    }, [movieData])

    /*console.log(movieError?.message)
    console.log(movieError?.extraInfo)
    if (movieLoading) return <pre>Loading...</pre>
    console.log(movieData._id);
    if (movieError) return <pre>{movieError.message}</pre>*/

    return(
        <div>
            {movies?.map((movie:Movie) => <p>{movie.title}</p>)}
        </div>
    )
}
export default AllMovies;

/*export default function Fetching() {

    // Just to try fetching data, Fetching is used in App.tsx to display result

    const { data, loading, error } = useQuery(GET_ALL_MOVIES);
    
    console.log(error?.message)
    console.log(error?.extraInfo)
    if (loading) return <pre>Loading...</pre>
    console.log(data._id);
    if (error) return <pre>{error.message}</pre>

  return (
      <div>
          {data._id}
      </div>
  )
}*/



