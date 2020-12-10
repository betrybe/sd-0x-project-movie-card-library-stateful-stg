import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component {
  renderSelect(allOption) {
    const { id, name, onChange, value, optionId } = this.props;
    return (
      <select
        name={ name }
        id={ id }
        data-testid={ id }
        onChange={ onChange }
        value={ value }
        selected={ value }
      >
        {allOption || ''}
        <option value="action" data-testid={ optionId }>Ação</option>
        <option value="comedy" data-testid={ optionId }>Comédia</option>
        <option value="thriller" data-testid={ optionId }>Suspense</option>
      </select>
    );
  }

  render() {
    const { id, labelText } = this.props;
    let allOption;
    if (id === 'select-input') {
      allOption = <option value="" data-testid="select-option">Todos</option>;
    }
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {labelText}
        { this.renderSelect(allOption) }
      </label>
    );
  }
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  optionId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectInput;
