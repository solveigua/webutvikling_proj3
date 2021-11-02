import React, {Component} from 'react';
import { searchMovie, fetchMovies } from '../../actions/searchActions';
import { connect } from 'react-redux';
import classes from './Search.module.css';


interface ISearchbarProps {
  searchMovie: any; /* type : (text: string) => (dispatch: Dispatch<dispatchType>) => void ga feil i koden*/
  fetchMovies: any; /* type : (text: string) => (dispatch: Dispatch<dispatchType>) => Promise<void> ga feil i koden*/
  text: string;
  }
  
interface ISearchbarState {
  moviesList: { _id: number, title: string, seqNr: number, releaseYear: number, rating: number, __typename: string }[];
  }

export class Searchbar extends Component<ISearchbarProps, ISearchbarState> {

  state: ISearchbarState = {
    moviesList: []
  };

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.searchMovie(e.currentTarget.value);
    }

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

const mapStateToProps = (state: any) /*TYPE? typeof searchReducer gir feil*/ => ({
    text: state.movies.text
})

export default connect(
    mapStateToProps,
    { searchMovie, fetchMovies }
    )(Searchbar);