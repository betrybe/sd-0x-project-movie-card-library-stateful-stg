import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectInput extends Component {
  renderOptionsAll(options) {
    return (<option data-testid={ `${options}-option` } value="">Todos</option>);
  }

  renderOptions(options) {
    return (
      <>
        <option data-testid={ `${options}-option` } value="action">Ação</option>
        <option data-testid={ `${options}-option` } value="comedy">Comédia</option>
        <option data-testid={ `${options}-option` } value="thriller">Suspense</option>
      </>
    );
  }

  render() {
    const { id, name, value, onChange, labelText, addMovie } = this.props;
    const options = addMovie ? 'genre' : 'select';
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {labelText}
        <select
          name={ name }
          id={ id }
          data-testid={ id }
          onChange={ onChange }
          value={ value }
          selected={ value }
        >
          { !addMovie && this.renderOptionsAll(options) }
          { this.renderOptions(options) }
        </select>
      </label>
    );
  }
}

SelectInput.defaultProps = { addMovie: undefined };

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addMovie: PropTypes.number,
};
