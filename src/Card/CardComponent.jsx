/* eslint-disable quotes */
/* eslint-disable indent */
import React, { Component } from "react";
import PropTypes from "prop-types";

import "./CardComponent.scss";
import Button from "./../Button/ButtonComponent.jsx";

const propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.object
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.object
  ]),
  style: PropTypes.object,
  type: PropTypes.string,
  imageUrl: PropTypes.string,
  fileType: PropTypes.string,
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
  header: <React.Fragment>Sample Card Header</React.Fragment>,
  footer: (
    <React.Fragment>
      <Button style={{ float: "left" }}>edit</Button>
      <Button style={{ float: "left" }} danger>
        delete
      </Button>
      Updated on
      <br />
      15 Dec 2017
    </React.Fragment>
  ),
  style: {},
  type: "children",
  imageUrl: "",
  fileType: "video_mp4",
  disabled: false,
  primary: false,
  danger: false,
  success: false,
  processing: false
};

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  parseClasses = () => {
    let classes = ["smpladmin_Card"];
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
          <div className="smpladmin_Card_Header">{this.props.header}</div>
          <div
            className={
              this.props.type === "children"
                ? "smpladmin_Card_Body"
                : this.props.type === "file"
                ? this.props.fileType
                  ? "smpladmin_Card_Body smpladmin_Card_BodyFile " +
                    this.props.fileType
                  : "smpladmin_Card_Body smpladmin_Card_BodyFile"
                : "smpladmin_Card_Body smpladmin_Card_BodyImage"
            }
            style={
              this.props.type === "image"
                ? {
                    backgroundImage: `url(${this.props.imageUrl})`
                  }
                : null
            }
          >
            {this.props.children ? this.props.children : null}
          </div>
          <div className="smpladmin_Card_Footer">{this.props.footer}</div>
        </div>
      </React.Fragment>
    );
  }
}

CardComponent.propTypes = propTypes;
CardComponent.defaultProps = defaultProps;

export default CardComponent;
