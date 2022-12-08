import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ToggleComponent.scss";

const propTypes = {
  label: PropTypes.string,
  onToggle: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string
  ]),
  value: PropTypes.bool,
};

const defaultProps = {
  label: "",
  disabled: false,
  value: false,
};

class ToggleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value?this.props.value:false
    };
  }

  handleClick = e => {
    if (!this.props.disabled) {
      let { value } = Object.assign({},this.state);
      value = !value;
      this.setState({value});

      if (this.props.onToggle) this.props.onToggle(value);
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({value: this.props.value});
    }
  }

  parseClasses = () => {
    let classes = ["smpladmin_Toggle"];
    if (this.state.value===true) classes.push("smpladmin_True");
    if (this.props.primary) classes.push("smpladmin_primary");
    if (this.props.danger) classes.push("smpladmin_danger");
    if (this.props.success) classes.push("smpladmin_success");
    if (this.props.disabled) classes.push("smpladmin_disabled");

    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};

    return (
      <React.Fragment>
        <div
          className={this.parseClasses()}
          style={style}
          onClick={this.handleClick}
        >
          <i />
          <div className="smpladmin_Toggle_Children">
            {this.props.children ? this.props.children : this.props.label}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ToggleComponent.propTypes = propTypes;
ToggleComponent.defaultProps = defaultProps;

export default ToggleComponent;
