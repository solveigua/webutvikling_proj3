import React, {Component} from 'react';
import { searchMovie, fetchMovies } from '../../actions/searchActions';
import { connect } from 'react-redux';
import classes from './Search.module.css';


interface ISearchbarProps {
  searchMovie: any; /* type : (text: string) => (dispatch: Dispatch<dispatchType>) => void creates error*/
  fetchMovies: any; /* type : (text: string) => (dispatch: Dispatch<dispatchType>) => Promise<void> creates error*/
  text: string;
  }
  
interface ISearchbarState {
  moviesList: { _id: number, title: string, seqNr: number, releaseYear: number, rating: number, __typename: string }[];
  }

//Searchbar in the Header - text input field and search button

export class Searchbar extends Component<ISearchbarProps, ISearchbarState> {

  state: ISearchbarState = {
    moviesList: []
  };

    // onChange changes the global state of text when the text in the search field changes
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.searchMovie(e.currentTarget.value);
    }

    // onSubmit makes sure that the correct movies are fetched and that the global state of movies updates
    onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
        this.setState({
          moviesList: this.props.fetchMovies(this.props.text)
        });
    }


    render() {
        return (
            <div className={classes.actions}>
              <form id="searchForm" onSubmit={this.onSubmit}>
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search for a Marvel movie"
                  onChange={this.onChange}
                />
                <button type="submit" className={classes.button}>
                  Search
                </button>
              </form>
            </div>
        )
    }
}

const mapStateToProps = (state: any) /*TYPE? typeof searchReducer creates error*/ => ({
    text: state.movies.text
})

export default connect(
    mapStateToProps,
    { searchMovie, fetchMovies }
    )(Searchbar);