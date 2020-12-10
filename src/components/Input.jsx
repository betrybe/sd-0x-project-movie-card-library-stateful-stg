import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { checked, id, name, onChange, type, value, labelText } = this.props;

    return (
      <label htmlFor={id} data-testid={`${id}-label`}>
        {labelText}
        <input
          checked={checked}
          data-testid={id}
          id={id}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
        />
      </label>
    );
  }
}

Input.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
