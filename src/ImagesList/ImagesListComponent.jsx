import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ImagesListComponent.scss";

const propTypes = {
  list: PropTypes.array,
  style: PropTypes.object,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string
  ]),
  borderColor: PropTypes.string,
  max: PropTypes.number,
  itemStyle: PropTypes.object,
};

const defaultProps = {
  list: [],
  disabled: false,
  style: {},
  borderColor: "white",
  max: null,
  itemStyle: {}
};

class ImagesListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list?this.props.list:false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.setState({list: this.props.list});
    }
  }

  parseClasses = () => {
    let classes = ["smpladmin_ImagesList"];
    if (this.props.disabled) classes.push("smpladmin_disabled");
    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};
    let { list } = this.state;
    let ext = "";
    if (this.props.max < list.length) {
      ext = (<div className="smpladmin_ImagesList_ext">...</div>);
      list = list.splice(0,this.props.max);
    }

    return (
      <React.Fragment>
        <div
          className={this.parseClasses()}
          style={style}
        >
        {ext}
        {list.reverse().map(img => {
            const itemStyle = {...this.props.itemStyle, backgroundImage: `url(${img})`, borderColor: this.props.borderColor};
            return (
              <div style={itemStyle} />
            );
        })}
        </div>
      </React.Fragment>
    );
  }
}

ImagesListComponent.propTypes = propTypes;
ImagesListComponent.defaultProps = defaultProps;

export default ImagesListComponent;
