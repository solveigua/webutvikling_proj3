import classes from './MovieItem.module.css';
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';
import { GET_ALL_MOVIES, SET_RATING } from "../../../util/queries";
 

interface input {
    movieId : string
}
//What is included in one movie item - we can change this if we want to expand ect. Remember to change the css file as well.

const MovieItem: React.FC<{key:string, _id:string, title:String, seqNr:number, releaseYear:number, rating: number}> = (props) => {
    const [rating, setRating] = useState<Number | null | undefined>(null);
    const [logRating, setLogRating] = useState(Number(localStorage.getItem(JSON.stringify(props.key))));
    const [hover, setHover] = useState<Number | null | undefined>(null);
    const [rateMovie, {data:rateData, error: rateError, loading:rateLoading}] = useMutation(SET_RATING)

    const handleChange = async (newRating: number | null) => {
        if (typeof newRating === 'number') {
            localStorage.setItem(JSON.stringify(props._id), newRating.toString());
            setRating(newRating)
            setLogRating(newRating)
            console.log(props);
            await rateMovie({ variables: { id: props._id, rating: newRating } })
        }
    }

    return (
        <li className = {classes.movie}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.seqNr}>{props.seqNr}</div>
                <div className={classes.releaseYear}>{props.releaseYear}</div>
                <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i+1;
            return (
            <label>
                <input 
                type='radio-star' 
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
                
            </div>
            <div>
            </div>
        </li>
    );
};

export default MovieItem;