import React, {Component} from 'react';
import { searchMovie, fetchMovies } from '../../actions/searchActions';
import { connect } from 'react-redux';
import classes from './Search.module.css';


interface ISearchbarProps {
  searchMovie: any; /*TYPE? searchMovie ligger i searchActions*/
  fetchMovies: any; /*TYPE? fetchMovies ligger i searchActions*/
  text: string;
  }
  
interface ISearchbarState {
  moviesList: { _id: number, title: string, seqNr: number, releaseYear: number }[];
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
        //this.state.moviesList = this.props.fetchMovies(this.props.text)
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

const mapStateToProps = (state: any) /*TYPE?*/ => ({
    text: state.movies.text
})

export default connect(
    mapStateToProps,
    { searchMovie, fetchMovies }
    )(Searchbar);