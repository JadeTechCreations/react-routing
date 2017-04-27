import React, { Component }  from 'react'; //eslint-disable-line
import inputFactory from './inputFactory';

class Text extends Component {

  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
        <div className={containerClassName}>
            <input
              {...rest}
              type='text'
              className={this.props.className}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
              value={this.props.value}
            />
            {hint}
        </div>
    );
  }
}

export default inputFactory(Text);
