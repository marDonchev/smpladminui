import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ListComponent.scss";
import Button from "./../Button/ButtonComponent.jsx";
import Icon from "./../Icon/IconComponent.jsx";

const propTypes = {
  header: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  list: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  style: PropTypes.object,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  processing: PropTypes.bool
};

const defaultProps = {
  header: ["Name", "Structure", "Updated on", "Actions"],
  list: [
    [
      "UX Science progress experiment with a very very long name that goes on one line for a long line",
      "Root / All Static Pages",
      "15 Dec 12:45",
      <React.Fragment>
        <Button danger style={{ float: "right" }}>
          delete
        </Button>
        <Button style={{ float: "right" }}>edit</Button>
        <Icon
          type={"bookmark_on"}
          variant={"grey"}
          style={{ float: "right" }}
        />
      </React.Fragment>
    ],
    [
      "UX Science progress experiment with a very very long name that goes on one line for a long line",
      "Root / All Static Pages",
      "15 Dec 12:45",
      <React.Fragment>
        <Button danger style={{ float: "right" }}>
          delete
        </Button>
        <Button style={{ float: "right" }}>edit</Button>
        <i
          style={{ float: "right" }}
          className="smpladmin_icon_bookmark_on_grey"
        ></i>
      </React.Fragment>
    ]
  ],
  footer: (
    <React.Fragment>
      <Button style={{ float: "right" }}>NEXT &gt;</Button>
      <Button style={{ float: "right" }}>4</Button>
      <Button style={{ float: "right" }}>3</Button>
      <Button style={{ float: "right" }}>2</Button>
      <Button style={{ float: "right" }}>&lt; PREV</Button>
    </React.Fragment>
  ),
  style: {},
  primary: false,
  danger: false,
  success: false,
  processing: false
};

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  parseClasses = () => {
    let classes = ["smpladmin_List"];
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
          <table>
            <thead>
              <tr>
                {this.props.header &&
                  this.props.header.map((h, hIndex) => {
                    return <th key={hIndex}>{h}</th>;
                  })}
              </tr>
            </thead>
            <tbody>
              {this.props.list
                ? this.props.list.map((l, lIndex) => {
                    let content = (
                      <tr key={lIndex}>
                        {l.map((le, leIndex) => {
                          return <td key={leIndex}>{le}</td>;
                        })}
                      </tr>
                    );
                    return content;
                  })
                : null}
            </tbody>
          </table>
          <div className="smpladmin_List_Footer">
            {this.props.footer ? this.props.footer : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
ListComponent.propTypes = propTypes;
ListComponent.defaultProps = defaultProps;

export default ListComponent;
