import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectInput from './SelectInput';
import Input from './Input';

class SearchBar extends Component {
  renderInput(id, labelText, value, callback) {
    return (
      <Input
        id={ id }
        labelText={ labelText }
        onChange={ callback }
        type="text"
        value={ value }
      />
    );
  }

  renderInput2() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <Input
        id="checkbox-input"
        labelText="Mostrar somente favoritos"
        onChange={ onBookmarkedChange }
        type="checkbox"
        checked={ bookmarkedOnly }
      />
    );
  }

  renderLastInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <SelectInput
        id="select-input"
        labelText="Filtrar por gênero"
        onChange={ onSelectedGenreChange }
        optionId="select-option"
        value={ selectedGenre }
      />
    );
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this
          .renderInput('text-input', 'Inclui o texto:', searchText, onSearchTextChange)}
        {
          this.renderInput2(
            'checkbox-input', 'Mostrar somente favoritos', '', onBookmarkedChange,
            'checkbox', bookmarkedOnly,
          )
        }
        { this.renderLastInput() }
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
