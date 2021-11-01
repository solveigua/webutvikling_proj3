import { GET_ALL_MOVIES } from "./queries";
import { useQuery } from "@apollo/client";
import React from "react";
import { disconnect } from "mongoose";

export default function Fetching() {

    // Just to try fetching data, Fetching is used in App.tsx to display result

    const { data, loading, error } = useQuery(GET_ALL_MOVIES);
    
    console.log(error?.message)
    console.log(error?.extraInfo)
  if (loading) return <pre>Loading...</pre>
  if (error) return <pre>{error.message}</pre>
  

  return (
      <div>
          {data._id}
      </div>
  )
}



