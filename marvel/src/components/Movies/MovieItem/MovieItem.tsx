import classes from './MovieItem.module.css';
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';
import {SET_RATING } from "../../../util/queries";
import {Card} from "antd";
import {coverMovies} from '../../../assets/index'; //list with all the pictures and their corresponding seqNr
 
const { Meta } = Card; 

//MovieItem - the object shown. Data is set in MovieContainer

const MovieItem: React.FC<{key:string, _id:string, title:string, seqNr:number, releaseYear:number, rating: number}> = (props) => {
    const [rating, setRating] = useState<number>(props.rating); //default rating, taken from
    const [hover, setHover] = useState<Number | null | undefined>(null);
    const [rateMovie] = useMutation(SET_RATING) //To set a new rating when new rating is clicked

    //For setting a new rating
    const handleChange = async (newRating: number | null) => {
        if (typeof newRating === 'number') {
            localStorage.setItem(JSON.stringify(props._id), newRating.toString());
            setRating(newRating)
            console.log(props);
            await rateMovie({ variables: { id: props._id, rating: newRating } })
        }
    }
    //finds correct picture to Movie
    const found = coverMovies.find(element => element.seqNr === props.seqNr);

    //The Array is used of making the star-rating
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
            <label key={i}>
                <input 
                type='radio-star' 
                name='rating' 
                defaultValue ={rating}
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