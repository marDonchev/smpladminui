import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PageComponent.scss";

const propTypes = {
  label: PropTypes.string.isRequired,
  stickyHeader: PropTypes.bool,
  style: PropTypes.object
};

const defaultProps = {
  label: "Page Label",
  stickyHeader: false
};

class PageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  parseClasses = () => {
    let classes = ["smpladmin_Page"];
    if (this.props.primary) classes.push("smpladmin_primary");
    if (this.props.danger) classes.push("smpladmin_danger");
    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};

    return (
      <React.Fragment>
        <div className={this.parseClasses()} style={style}>
          <div
            className={
              !this.props.stickyHeader
                ? "smpladmin_Page_HeaderRow"
                : "smpladmin_Page_HeaderRow smpladmin_sticky"
            }
          >
            <div className={"smpladmin_Page_PageTitle"}>{this.props.label}</div>
          </div>
          {this.props.children ? this.props.children : null}
        </div>
      </React.Fragment>
    );
  }
}
PageComponent.propTypes = propTypes;
PageComponent.defaultProps = defaultProps;

export default PageComponent;
