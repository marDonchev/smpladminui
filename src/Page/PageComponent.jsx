import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PageComponent.scss";

const propTypes = {
  label: PropTypes.string.isRequired,
  stickyHeader: PropTypes.bool,
  style: PropTypes.object,
  primary: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  danger: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  success: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  processing: PropTypes.oneOfType([PropTypes.bool, PropTypes.any])
};

const defaultProps = {
  label: "Page Label",
  stickyHeader: false,
  primary: false,
  danger: false,
  success: false,
  processing: false
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
    if (this.props.success) classes.push("smpladmin_success");
    if (this.props.processing) classes.push("smpladmin_processing");
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
