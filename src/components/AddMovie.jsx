import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

import SelectInput from './SelectInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    event.preventDefault();
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
    onClick(this.state);
  }

  renderInput(id, labelText, name, value) {
    return (
      <Input
        id={ id }
        labelText={ labelText }
        name={ name }
        onChange={ this.handleInputs }
        type="text"
        value={ value }
      />
    );
  }

  renderNumberInput(id, labelText, name, value) {
    return (
      <Input
        id={ id }
        labelText={ labelText }
        name={ name }
        onChange={ this.handleInputs }
        type="number"
        value={ value }
      />
    );
  }

  renderTextArea() {
    const { storyline } = this.state;
    return (
      <textarea
        id="storyline-input"
        value={ storyline }
        data-testid="storyline-input"
        onChange={ this.handleInputs }
        name="storyline"
      />
    );
  }

  renderSelectInput() {
    const { genre } = this.state;
    return (
      <SelectInput
        id="genre-input"
        labelText="Gênero"
        name="genre"
        onChange={ this.handleInputs }
        optionId="genre-option"
        value={ genre }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.renderInput('title-input', 'Título', 'title', title)}
        {this.renderInput('subtitle-input', 'Subtítulo', 'subtitle', subtitle)}
        {this.renderInput('image-input', 'Imagem', 'imagePath', imagePath)}
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          { this.renderTextArea() }
        </label>
        {this.renderNumberInput('rating-input', 'Avaliação', 'rating', rating)}
        { this.renderSelectInput() }
        <button type="button" data-testid="send-button" onClick={ this.handleSubmit }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
