import classes from './MovieItem.module.css';
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';
import { GET_ALL_MOVIES, SET_RATING } from "../../../util/queries";
import {Card} from "antd";
import {coverMovies} from '../../../assets/index';
 
const { Meta } = Card;

interface input {
    movieId : string
}
//What is included in one movie item - we can change this if we want to expand ect. Remember to change the css file as well.

const MovieItem: React.FC<{key:string, _id:string, title:string, seqNr:number, releaseYear:number, rating: number}> = (props) => {
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

    const found = coverMovies.find(element => element.seqNr == props.seqNr);

    return (
        <Card
            className={classes.movie}
            hoverable
            style={{ width: 360 }}
            cover={<img className={classes.movieImg} alt={props.title} src={found?.picture} />}
        >
        <Meta className="movie-item-title" title={props.title} />
        <Meta className={classes.releaseYear} title= {props.releaseYear}/>
            
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
        </Card>
    );
};

export default MovieItem;