import React, { Component } from 'react';

class FormValidation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      feedback: '',
      acceptedTerms: false,
      validationErrors: {},
      submitted: 0
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.validateFields = this.validateFields.bind(this);
  }

  handleOnChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'text' ? target.value : target.checked; // !this.state.acceptedTerms

    this.setState({
      [name]: value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();

    const isFormValid = this.validateFields();

    if (isFormValid) {
      this.setState(state => {
        return {
          submitted: state.submitted + 1
        };
      });
    }
  }

  validateFields() {
    const { firstName, feedback, acceptedTerms } = this.state;
    const errors = {};
    if (!firstName) {
      errors['firstName'] = 'First name cannot be empty.';
    }
    if (!feedback) {
      errors['feedback'] = 'Feedback name cannot be empty.';
    }
    if (!acceptedTerms) {
      errors['acceptedTerms'] = 'Please accept terms.';
    }
    this.setState({
      validationErrors: errors
    });
    return Object.keys(errors).length === 0;
  }

  render() {
    const {
      firstName: firstNameError,
      feedback: feedbackError,
      acceptedTerms: acceptedTermsError
    } = this.state.validationErrors;

    return (
      <React.Fragment>
        <section>
          <h3>Form Submit events:</h3>
          <form onSubmit={this.handleOnSubmit}>
            <label>
              <span className='error'>{firstNameError}</span>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={this.state.firstName}
                onChange={this.handleOnChange}
              />
            </label>

            <label>
              <span className='error'>{feedbackError}</span>
              {console.log('feedbackError:', feedbackError)}
              <input
                type='text'
                name='feedback'
                placeholder='Feedback'
                value={this.state.feedback}
                onChange={this.handleOnChange}
              />
            </label>

            <label>
              <span className='error'>{acceptedTermsError}</span>
              <input
                type='checkbox'
                name='acceptedTerms'
                checked={this.state.acceptedTerms}
                onChange={this.handleOnChange}
              />{' '}
              I accept the terms
            </label>

            <button type='submit'>Submit</button>

            <p>Submitted {this.state.submitted} times!</p>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default FormValidation;
