import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ButtonComponent.scss";

const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.string
  ]),
  primary: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  danger: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
  processing: PropTypes.oneOfType([PropTypes.bool, PropTypes.any])
};

const defaultProps = {
  label: "Button",
  disabled: false,
  primary: false,
  danger: false,
  processing: false
};

// export default class ButtonComponent extends Component {
//   static propTypes = {
//     text: PropTypes.string
//   };

//   render() {
//     const { text } = this.props;

//     return <div className={styles.test}>Example Component: {text}</div>;
//   }
// }
class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    if (this.props.onClick) this.props.onClick(e.target.value);
  };

  parseClasses = () => {
    let classes = ["smpladmin_Button"];
    if (this.props.primary) classes.push("smpladmin_primary");
    if (this.props.danger) classes.push("smpladmin_danger");
    if (this.props.processing) classes.push("smpladmin_processing");
    return classes.join(" ");
  };

  render() {
    const style = this.props.style || {};

    return (
      <React.Fragment>
        <button
          className={this.parseClasses()}
          style={style}
          onClick={this.handleClick}
          {...this.props}
        >
          {this.props.children ? this.props.children : this.props.label}
        </button>
      </React.Fragment>
    );
  }
}

// export default ButtonComponent;

// const ButtonComponent = props => {
// 	const style = props.style || {};

// 	const handleClick = e => {
// 		if (props.onClick) props.onClick(e.target.value);
// 	};

// 	const parseClasses = () => {
// 		let classes = ["smpladmin_Button"];
// 		if (props.primary) classes.push("smpladmin_primary");
// 		if (props.danger) classes.push("smpladmin_danger");
// 		if (props.processing) classes.push("smpladmin_processing");
// 		return classes.join(" ");
// 	};

// 	return (
// 		<React.Fragment>
// 			<button
// 				className={parseClasses()}
// 				style={style}
// 				onClick={handleClick}
// 				// {...props}
// 			>
// 				{props.children ? props.children : props.label}
// 			</button>
// 		</React.Fragment>
// 	);
// };

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;

export default ButtonComponent;
