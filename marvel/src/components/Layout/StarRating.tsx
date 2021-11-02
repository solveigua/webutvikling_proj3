import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';
import { GET_ALL_MOVIES, SET_RATING } from "../../util/queries";

interface Props {
    movieId : string
}

const StarRating = (props: Props) => {

    const [rating, setRating] = useState<Number | null | undefined>(null);
    const [logRating, setLogRating] = useState(Number(localStorage.getItem(JSON.stringify(props.movieId))));
    const [hover, setHover] = useState<Number | null | undefined>(null);
    const [rateMovie, {data:rateData, error: rateError, loading:rateLoading}] = useMutation(SET_RATING,{ refetchQueries: [GET_ALL_MOVIES, 'getAllMovies']} )

    const handleChange = async (newRating: number | null) => {
        if (typeof newRating === 'number') {
            localStorage.setItem(JSON.stringify(props.movieId), newRating.toString());
            setRating(newRating)
            setLogRating(newRating)
            await rateMovie({ variables: { id: props.movieId, rating: newRating } })
        }
    }


    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i+1;
            return (
            <label>
                <input 
                type='radio' 
                name='rating' 
                value ={ratingValue}
                onClick= {() => handleChange(ratingValue)}
                />
                 <FaStar 
                 className="star" 
                 color={ratingValue <= (hover! ||rating) ? "#ffc107" : "#e4e5e9"} 
                 size={30}
                 onMouseEnter={() => setHover(ratingValue)}
                 onMouseLeave={() => setHover(null)}
                 />
            </label>

            );
        }) }
        <p> Your rating is: {rating}/5 </p>
    </div>
}

export default StarRating;