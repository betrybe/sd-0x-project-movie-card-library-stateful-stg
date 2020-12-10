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
    event.preventDefault();

    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));

    this.props.onClick(this.state);
  }

  renderInput(id, labelText, name, value, type = 'text') {
    return (
      <Input
        id={id}
        labelText={labelText}
        name={name}
        onChange={this.handleInputs}
        type={type}
        value={value}
      />
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderInput('title-input', 'Título', 'title', this.state.title)}
        {this.renderInput('subtitle-input', 'Subtítulo', 'subtitle', this.state.subtitle)}
        {this.renderInput('image-input', 'Imagem', 'imagePath', this.state.imagePath)}
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            id="storyline-input" value={this.state.storyline}
            data-testid="storyline-input" onChange={this.handleInputs}
            name="storyline"
          />
        </label>
        {this.renderInput('rating-input', 'Avaliação', 'rating', this.state.rating, 'number')}
        <SelectInput
          id="genre-input"
          labelText="Gênero"
          name="genre"
          onChange={this.handleInputs}
          optionId="genre-option"
          value={this.state.genre}
        />
        <button data-testid="send-button" onClick={this.handleSubmit}>Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
