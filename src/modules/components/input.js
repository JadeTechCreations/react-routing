import React, { Component }  from 'react'; //eslint-disable-line
import inputFactory from './inputFactory';

class Input extends Component {
  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
      <div className={containerClassName}>
          <input
            {...rest}
            type='file'
            className={this.props.className}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            value={this.props.value}
            name={this.props.name}
            id={this.props.name}
            placeholder={this.props.placeholder}
            onChange={(e)=>this.onChange(e)}
          />
          {hint}
      </div>
    );
  }
}

export default inputFactory(Input);
