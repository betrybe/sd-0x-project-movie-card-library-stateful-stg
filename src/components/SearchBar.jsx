import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SelectInput from './SelectInput';

export default class SearchBar extends Component {
  renderSelect() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <SelectInput
        id="select-input"
        name="selectedGenre"
        onChange={ onSelectedGenreChange }
        value={ selectedGenre }
        labelText="Filtrar por gênero"
      />
    );
  }

  render1stInput() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <Input
        type="text"
        id="text-input"
        name="searchText"
        onChange={ onSearchTextChange }
        value={ searchText }
        labelText="Inclui o texto"
      />
    );
  }

  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Input
          type="text"
          id="text-input"
          name="searchText"
          onChange={ onSearchTextChange }
          value={ searchText }
          labelText="Inclui o texto"
        />
        { this.render1stInput() }
        { this.renderSelect() }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
