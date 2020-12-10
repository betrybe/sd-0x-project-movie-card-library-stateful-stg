import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick(addMovieStates) {
    this.setState((prevState) => ({ movies: [...prevState.movies, addMovieStates] }));
  }

  onSearchTextChange({ target }) {
    const { value } = target;

    this.setState((_, props) => (
      (value === '')
      ? {
        searchText: value,
        movies: props.movies,
      }
      : {
        searchText: value,
        movies: props.movies.filter((movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase())
          || movie.subtitle.toLowerCase().includes(value.toLowerCase())
          || movie.storyline.toLowerCase().includes(value.toLowerCase()),
        ),
      }
    ));
  }

  onBookmarkedChange() {
    this.setState((prevState, props) => (
      (prevState.bookmarkedOnly)
      ? {
        bookmarkedOnly: !prevState.bookmarkedOnly,
        movies: props.movies,
      }
      : {
        bookmarkedOnly: !prevState.bookmarkedOnly,
        movies: prevState.movies.filter((movie) => movie.bookmarked),
      }
    ));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState((_, props) => (
      (value === '')
      ? {
        selectedGenre: value,
        movies: props.movies,
      }
      : {
        selectedGenre: value,
        movies: props.movies.filter((movie) => movie.genre === value),
      }
    ));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(Object).isRequired };

export default MovieLibrary;
