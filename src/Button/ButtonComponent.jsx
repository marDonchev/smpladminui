import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ButtonComponent.scss";

const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string
  ]),
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  processing: PropTypes.bool
};

const defaultProps = {
  label: "Button",
  disabled: false,
  primary: false,
  danger: false,
  success: false,
  processing: false
};

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    if (this.props.onClick) this.props.onClick(e.target.value);
  };

  parseClasses = () => {
    let classes = ["smpladmin_Button"];
    if (this.props.primary) classes.push("smpladmin_primary");
    if (this.props.danger) classes.push("smpladmin_danger");
    if (this.props.success) classes.push("smpladmin_success");
    if (this.props.processing) classes.push("smpladmin_processing");
    if (this.props.disabled) classes.push("smpladmin_disabled");

    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};

    return (
      <React.Fragment>
        <button
          className={this.parseClasses()}
          style={style}
          onClick={this.handleClick}
        >
          {this.props.children ? this.props.children : this.props.label}
        </button>
      </React.Fragment>
    );
  }
}

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;
