import React, { Component } from "react";
import PropTypes from "prop-types";

import "./WrapperComponent.scss";

const propTypes = {
  style: PropTypes.object
};

const defaultProps = {
  /* Empty default props */
};

class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  parseClasses = () => {
    let classes = ["smpladmin_Wrapper"];
    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};

    return (
      <React.Fragment>
        <div className={this.parseClasses()} style={style} {...this.props}>
          {this.props.children ? this.props.children : null}
        </div>
      </React.Fragment>
    );
  }
}
WrapperComponent.propTypes = propTypes;
WrapperComponent.defaultProps = defaultProps;

export default WrapperComponent;
