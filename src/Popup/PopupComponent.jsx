import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PopupComponent.scss";

const propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hint: PropTypes.string,
  footer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string,
    PropTypes.object
  ]),
  style: PropTypes.object,
  type: PropTypes.string,
  time: PropTypes.number,
  onClose: PropTypes.func,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  processing: PropTypes.bool
};

const defaultProps = {
  label: "Popup Label",
  hint: null,
  type: "normal",
  footer: null,
  style: {},
  time: 0, // in seconds
  onClose: () => {},
  primary: false,
  danger: false,
  success: false,
  processing: false
};

class PopupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time || null,
      timeInterval: null
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.visible === false &&
      this.props.visible === true &&
      this.props.time &&
      this.props.time > 0
    ) {
      this.setState({
        time: this.props.time,
        timeInterval: setInterval(this.calculateTime, 1000)
      });
    }
  }

  parseClasses = () => {
    let classes = ["smpladmin_Popup"];
    if (this.props.primary) classes.push("smpladmin_primary");
    if (this.props.danger) classes.push("smpladmin_danger");
    if (this.props.success) classes.push("smpladmin_success");
    if (this.props.processing) classes.push("smpladmin_processing");
    return classes.join(" ");
  };

  handleOnClose = () => {
    if (this.props.onClose) {
      if (this.state.timeInterval) clearInterval(this.state.timeInterval);
      this.props.onClose();
    }
  };

  calculateTime = () => {
    let time = this.state.time;
    time--;
    this.setState({ time });
    if (time === 0 && this.props.onClose) {
      clearInterval(this.state.timeInterval);
      this.props.onClose();
      this.setState({ timeInterval: null });
    }
  };

  render() {
    const style = this.props.style || {};

    const bodyClass = this.props.type === "message" ? "smpladmin_message" : "";

    return (
      <React.Fragment>
        {this.props.visible ? (
          <React.Fragment>
            <div className={"smpladmin_Reveal"} />
            <div className={this.parseClasses()} style={style}>
              <button
                className="smpladmin_Popup_CloseButton"
                onClick={this.handleOnClose}
              >
                &times;
              </button>
              {this.state.time && this.state.time > 0 ? (
                <div className={"smpladmin_Popup_CloseText"}>
                  Close in {this.state.time}s
                </div>
              ) : null}
              <h1>{this.props.label ? this.props.label : null}</h1>
              {this.props.hint ? (
                <p className="smpladmin_Popup_Hint">{this.props.hint}</p>
              ) : null}
              <p className={bodyClass}>
                {this.props.children ? this.props.children : null}
              </p>
              {this.props.footer ? (
                <div className="smpladmin_Popup_Footer">
                  {this.props.footer}
                </div>
              ) : null}
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
PopupComponent.propTypes = propTypes;
PopupComponent.defaultProps = defaultProps;

export default PopupComponent;
