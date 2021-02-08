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
  selectable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string
  ]),
  limitSelection: PropTypes.number,
  itemUrlKey: PropTypes.string,
  itemExtraKey: PropTypes.string,
  itemSecondaryKey: PropTypes.string,
  onSelect: PropTypes.func,
  selected: PropTypes.array
};

const defaultProps = {
  list: [],
  disabled: false,
  style: {},
  borderColor: "white",
  max: null,
  limitSelection: null,
  itemStyle: {},
  selectable: false,
  itemUrlKey: "url",
  itemExtraKey: "name",
  itemSecondaryKey: null,
  selected: []
};

class ImagesListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list ? this.props.list : false,
      selected: this.props.selected ? this.props.selected : []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.setState({ list: this.props.list });
    }
    if (this.props.selected && this.props.selected !== prevProps.selected) {
      this.setState({ selected: this.props.selected });
    }
  }

  handleSelect = e => {
    let { selected } = this.state;
    if (selected.includes(e)) {
      selected = selected.filter(s => s !== e);
    } else {
      selected.push(e);
    }
    if (this.props.limitSelection && this.props.limitSelection > 0) {
      selected = selected.slice(selected.length - this.props.limitSelection);
    }
    this.setState({ selected });
    if (this.props.onSelect) this.props.onSelect(selected);
  };

  parseClasses = () => {
    let classes = ["smpladmin_ImagesList"];
    if (this.props.disabled) classes.push("smpladmin_disabled");
    if (this.props.selectable) classes.push("smpladmin_selectable");
    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};
    let { list } = this.state;
    let ext = "";
    if (this.props.max && this.props.max < list.length) {
      ext = <div className="smpladmin_ImagesList_ext">...</div>;
      list = list.splice(0, this.props.max);
    }

    return (
      <React.Fragment>
        <div className={this.parseClasses()} style={style}>
          {ext}
          {!this.props.selectable &&
            list.reverse().map((img, imgIndex) => {
              const itemStyle = {
                ...this.props.itemStyle,
                backgroundImage: `url(${img})`,
                borderColor: this.props.borderColor
              };
              return (
                <div key={imgIndex} style={itemStyle}>
                  <span></span>
                </div>
              );
            })}

          {this.props.selectable === true &&
            list.map((img, imgIndex) => {
              const itemStyle = {
                ...this.props.itemStyle,
                backgroundImage: `url(${img[this.props.itemUrlKey]})`,
                borderColor: this.props.borderColor
              };
              return (
                <div
                  key={imgIndex}
                  onClick={e => this.handleSelect(img[this.props.itemUrlKey])}
                  className={
                    this.state.selected.includes(img[this.props.itemUrlKey])
                      ? "smpladmin_selected"
                      : null
                  }
                >
                  <div style={itemStyle} />
                  <span>{img[this.props.itemExtraKey]}</span>
                  {this.props.itemSecondaryKey &&
                  img[this.props.itemSecondaryKey] ? (
                    <span>{img[this.props.itemSecondaryKey]}</span>
                  ) : null}
                </div>
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
