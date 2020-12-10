import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import TextAreaInput from './TextAreaInput';
import SelectInput from './SelectInput';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    const { onClick } = this.props;
    event.preventDefault();

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    return onClick(this.state);
  }

  renderInput(name, id, value, labelText) {
    return name === 'storyline' ? (
      <TextAreaInput
        name={ name }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
        labelText={ labelText }
      />
    ) : (
      <Input
        type="text"
        name={ name }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
        labelText={ labelText }
      />
    );
  }

  renderNumberInput(name, id, value, labelText) {
    return (
      <Input
        type="number"
        name={ name }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
        labelText={ labelText }
      />
    );
  }

  renderButton() {
    return (
      <div className="button">
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </div>
    );
  }

  renderLastInput() {
    const { genre } = this.state;
    return (
      <SelectInput
        name="genre"
        id="genre-input"
        value={ genre }
        onChange={ this.handleChange }
        labelText="Gênero"
        addMovie={ 1 }
      />
    );
  }

  render() {
    const { rating, title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.renderInput('title', 'title-input', title, 'Título') }
        { this.renderInput('subtitle', 'subtitle-input', subtitle, 'Subtítulo') }
        { this.renderInput('imagePath', 'image-input', imagePath, 'Imagem') }
        { this.renderInput('storyline', 'storyline-input', storyline, 'Sinopse') }
        { this.renderNumberInput('rating', 'rating-input', rating, 'Avaliação') }
        { this.renderLastInput() }
        { this.renderButton() }
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };
