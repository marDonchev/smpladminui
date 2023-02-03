/* eslint-disable quotes */
/* eslint-disable indent */
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./StatComponent.scss";
import DropmenuComponent from "../Dropmenu/DropmenuComponent.jsx";

const propTypes = {

  title: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.object
  ]),
  diff: PropTypes.number,
  diffPrefix: PropTypes.string,
  diffSuffix: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dropMenu: PropTypes.oneOfType([
    DropmenuComponent
  ]),
  variant: PropTypes.oneOfType([
    "full",
    "compact"
  ]),
  style: PropTypes.object,
};

const defaultProps = {
  title: <React.Fragment>Stat Title</React.Fragment>,
  diff: 0,
  diffPrefix: "%",
  diffSuffix: "last month",
  value: 0,
  subtitle: "subtitle",
  dropMenu: null,
  variant: "full",
  style: {}
};

class StatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  parseClasses = () => {
    let classes = ["smpladmin_Stat"];
    if (this.props.diff > 0) classes.push("smpladmin_positive");
    if (this.props.diff < 0) classes.push("smpladmin_negative");
    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};

    return (
      <React.Fragment>
        <div className={this.parseClasses()} style={style}>
          <div className="smpladmin_Stat_Title">{this.props.title}</div>
          <div className="smpladmin_Stat_SubTitle">{this.props.subtitle}</div>
          <div className="smpladmin_Stat_Value">{this.props.value}</div>
          <div className="smpladmin_Stat_Diff">
            {this.props.diff > 0 ? (<span>&uarr;</span>) : (<span>&darr;</span>)}
            {this.props.diff}{this.props.diffPrefix} {this.props.diffSuffix}
          </div>
          {this.props.dropMenu && (<div className="smpladmin_Stat_Dropmenu">{this.props.dropMenu}</div>)}
          <div className="smpladmin_Stat_Body">
            {this.props.children ? this.props.children : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

StatComponent.propTypes = propTypes;
StatComponent.defaultProps = defaultProps;

export default StatComponent;
