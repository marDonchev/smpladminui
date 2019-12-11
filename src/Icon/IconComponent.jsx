import React, { Component } from "react";
import PropTypes from "prop-types";

import "./IconComponent.scss";

const propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
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
  type: "settings",
  variant: "grey",
  onClick: () => {},
  primary: false,
  disabled: false,
  success: false,
  processing: false
};

class IconComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    if (this.props.onClick) this.props.onClick(e.target.value);
  };

  parseClasses = () => {
    let classes = ["smpladmin_Icon"];
    if (this.props.type)
      classes.push(
        "smpladmin_icon_" + this.props.type + "_" + this.props.variant
      );
    if (this.props.primary) classes.push("smpladmin_primary");
    if (this.props.danger) classes.push("smpladmin_danger");
    if (this.props.success) classes.push("smpladmin_success");
    if (this.props.processing) classes.push("smpladmin_processing");
    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};
    return (
      <React.Fragment>
        <i
          className={this.parseClasses()}
          style={style}
          onClick={this.handleClick}
        />
      </React.Fragment>
    );
  }
}
IconComponent.propTypes = propTypes;
IconComponent.defaultProps = defaultProps;

export default IconComponent;
