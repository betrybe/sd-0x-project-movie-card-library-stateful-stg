import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectInput from './SelectInput';
import Input from './Input';

class SearchBar extends Component {
  renderInput(id, labelText, value, callback, type = 'text', checked) {
    return (
      <Input
        id={id}
        labelText={labelText}
        onChange={callback}
        type={type}
        value={value}
        checked={checked}
      />
    );
  }

  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        {this.renderInput('text-input', 'Inclui o texto:', searchText, onSearchTextChange)}
        {
          this.renderInput(
            'checkbox-input', 'Mostrar somente favoritos', '', onBookmarkedChange,
            'checkbox', bookmarkedOnly,
          )
        }
        <SelectInput
          id="select-input"
          labelText="Filtrar por gênero"
          onChange={onSelectedGenreChange}
          optionId="select-option"
          value={selectedGenre}
        />
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
