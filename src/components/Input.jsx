import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, id, name, value, onChange, labelText } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {labelText}
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ id }
          onChange={ onChange }
          value={ value }
          checked={ value }
        />
      </label>
    );
  }
}

Input.defaultProps = { type: 'text' };

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
