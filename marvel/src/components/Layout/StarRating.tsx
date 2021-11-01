import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';
import { SET_RATING } from "../../util/queries";

interface Props {
    movieId : string
}

const StarRating = (props: Props) => {

    const [rating, setRating] = useState<Number | null | undefined>(null);
    const [hover, setHover] = useState<Number | null | undefined>(null);
    const [rateMovie, {data:rateData, error: rateError, loading:rateLoading}] = useMutation(SET_RATING)

    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i+1;
            return (
            <label>
                <input 
                type='radio' 
                name='rating' 
                value ={ratingValue}
                onClick= {() => {setRating(ratingValue); rateMovie({variables:{id:props.movieId, rating:ratingValue}})}}
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
        <p> You rating is: {rating}/5 </p>
    </div>
}

export default StarRating;