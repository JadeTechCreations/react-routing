import React, { Component } from 'react'; //eslint-disable-line
import inputFactory from './inputFactory';

class FileInput extends Component {

  handleChange = (event) => {

    // this.props.value = event.target.files[0];
    const fileName = event.target.value.replace(/^.*[\\\/]/, '');

    var label	 = event.target.parentElement.nextElementSibling, labelVal = label.innerHTML;

    if ( fileName ) {
      label.querySelector( 'span' ).innerHTML = fileName;
    } else {
      label.innerHTML = labelVal;
    }
    this.props.value.push(event.target.files[0]);
    this.props.onChange(event);
  }

  render() {
    const { containerClassName, hint, name, ...rest } = this.props;

    return (
        <div className={containerClassName}>
          <div className='input-group'>
            <input
              type='file'
              {...rest}
              className='show-for-sr'
              name={name}
              id={name}
              onChange={this.handleChange}
              value={this.props.value} />


              <label htmlFor={this.props.name} className="button" style={{margin: 0}}>Upload File</label>

          </div>
          <div>
            <label htmlFor={this.props.name}>
              <span className="uploadText"></span>
            </label>
          </div>
          <div>
            {hint}
          </div>
        </div>
    );
  }
}

export default inputFactory(FileInput);
