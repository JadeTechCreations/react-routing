import React, {Component} from 'react'; //eslint-disable-line
import api from 'api';
import {Button, Files, Form, Select, Text} from './html';
import './extends';

class TestForm extends Component {
  constructor() {
    super();

    this.state = {
      errors: {},
      files: [],
      workflow: '',
      email: ''
    };

    (new api()).get('/pdm/v1/validation/workflowTypes',(response) => {
      const options = Object.entries(response.data).map((option, i) =>
        <option key={i} value={option[0]}>{option[1]}</option>);

      this.setState({options: options});
    });
  }

  handleChange = (e) => {
    e.preventDefault();

    this.state.files.push(e.target.files[0]);
  }

  onClick = (event) => {
    event.preventDefault();

    this.setState({
      errors: this.form.validateAll()
    });
  };



  onSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append('retentionInDays', 1);
    formData.append('workflow',this.state.workflow);
    formData.append('email','me@blah.com');

    for (var key in this.state.files) {
      if (this.state.files.hasOwnProperty(key)) {
        formData.append('files', this.state.files[key]);
      }
    }

    // call api with form data
    var a = new api();
    var res = a.post(formData);
  }

  render() {
    return (
      <div className='small-12 columns'>
      <Form ref={c => this.form = c} onSubmit={this.onSubmit}>
        <span className='small-12 columns'>Email</span>
        <Text
          errorClassName='is-invalid-input'
          containerClassName='small-12 columns'
          name='email'
          validations={['required', 'email']}
          value={this.state.email} />
        <span className='small-12 columns'>Workflow</span>
        <Select
            name='workflow'
            containerClassName='small-12 columns'
            errorClassName='is-invalid-input'
            validations={['required']}
            value={this.state.workflow}>
            <option value=''>Select One</option>
            {this.state.options}
        </Select>
        <span className='small-12 columns'>File(s)</span>
        <Files
          type='file'
          name='files'
          containerClassName='small-12 columns'
          errorClassName='is-invalid-input'
          validations={['requiredFile']}
          value={this.state.files} />


        <Button containerClassName='small-12 columns' className='button' errorClassName='asd'>Submit</Button>
      </Form>
      </div>
    );
  }
}

export default TestForm;
