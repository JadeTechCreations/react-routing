import React, { Component }  from 'react'; //eslint-disable-line
import selectFactory from './selectFactory';

class Select extends Component {

  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
      <div>
        <div className={containerClassName}>
            <select
              {...rest}
              className={this.props.className}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
              value={this.props.value} >
                {this.props.children}
            </select>
            {hint}
        </div>
      </div>
    );
  }
}

export default selectFactory(Select);
