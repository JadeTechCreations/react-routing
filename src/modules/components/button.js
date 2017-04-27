import React, { Component, PropTypes } from 'react'; //eslint-disable-line
import cx from 'classnames';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    errorClassName: PropTypes.string,
    className: PropTypes.string
  };

  static contextTypes = {
    errors: PropTypes.objectOf(PropTypes.array)
  };

  render() {
    const { containerClassName, errorClassName, className, ...rest } = this.props;
    const isDisabled = Object.keys(this.context.errors).length;

    return (
      <div className={containerClassName}>
        <button
          className={cx({
            [className]: !!className,
            [errorClassName]: isDisabled && errorClassName
          })}
          disabled={isDisabled}
          {...rest}
        >
        {this.props.children}
        </button>
      </div>
    );
  }
}
