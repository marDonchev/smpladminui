import React, { Component } from "react";
import PropTypes from "prop-types";

import "./DropmenuComponent.scss";

import Icon from "./../Icon/IconComponent.jsx";

const propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string
  ]),
  primary: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  danger: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  success: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  processing: PropTypes.oneOfType([PropTypes.bool, PropTypes.any])
};

const defaultProps = {
  options: [
    {
      icon: <Icon type={"listtype_list"} variant={"grey"} />,
      label: "View as List",
      onClick: null
    },
    {
      icon: <Icon type={"listtype_cards"} variant={"grey"} />,
      label: "View as Cards",
      onClick: () => {
        alert("test");
      }
    }
  ],
  disabled: false,
  primary: false,
  danger: false,
  success: false,
  processing: false
};

class DropmenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  parseClasses = () => {
    let classes = ["smpladmin_Dropmenu"];
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
        <div className={this.parseClasses()} style={style} {...this.props}>
          <button></button>

          <div className="smpladmin_Dropmenu_Options">
            {this.props.options &&
              this.props.options.map((o, oIndex) => {
                return (
                  <div
                    key={oIndex}
                    className="smpladmin_Dropmenu_Option"
                    onClick={e =>
                      typeof o.onClick == "function" ? o.onClick() : null
                    }
                  >
                    {o.icon}
                    {o.label}
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DropmenuComponent.propTypes = propTypes;
DropmenuComponent.defaultProps = defaultProps;

export default DropmenuComponent;
