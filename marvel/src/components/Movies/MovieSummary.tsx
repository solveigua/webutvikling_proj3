import React, { Component } from 'react';
import SortingChart from '../UI/SortingChart';
import classes from './MovieSummary.module.css';
import {  fetchMovies } from '../../actions/searchActions';
import { connect, Provider } from 'react-redux';
import store from '../../store';

interface IAllMoviesProps {
    fetchMovies: any; /*TYPE? (text: string) => (dispatch: Dispatch<dispatchType>) => Promise<void> gir feil*/
    }
    
  interface IAllMoviesState {
    moviesList: { _id: number, title: string, seqNr: number, releaseYear: number, rating: number, __typename: string }[];
    }

//The MovieSummary item - shown in Movies

export class MovieSummary extends Component<IAllMoviesProps, IAllMoviesState> {

    state: IAllMoviesState = {
        moviesList: []
      };

    //ferches the movies

    showAllMovies = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        this.props.fetchMovies(" ");
        this.setState({
            moviesList: this.props.fetchMovies(" ")
          });
    }

    render() {
        return (
            <Provider store={store}>
                <section className={classes.summary}>
                    <h2>Marvel Cinematic Universe </h2>
                    <p className={classes.info}> Search for your favourite Marvel Cinematic Universe movies and give them a rating!</p>
                    <p className={classes.heading}> Sort movies based on: </p>
                    <SortingChart />
                    <div className={classes.buttoncontainer}>
                        <button className={classes.button} onClick={this.showAllMovies}> Show All Movies</button>
                    </div>
                </section>
            </Provider>
        );
    }
};

const mapStateToProps = (state: any) /*TYPE?*/ => ({
    text: state.movies.text
})

export default connect(
    mapStateToProps,
    {fetchMovies}
    )(MovieSummary);

