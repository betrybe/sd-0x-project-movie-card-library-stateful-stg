import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextAreaInput extends Component {
  render() {
    const { id, name, value, onChange, labelText } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {labelText}
        <textarea
          name={ name }
          id={ id }
          data-testid={ id }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

TextAreaInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
