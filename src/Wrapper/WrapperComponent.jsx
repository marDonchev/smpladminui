import React from "react";
import PropTypes from "prop-types";

import "./WrapperComponent.scss";

const propTypes = {
	style: PropTypes.object
};

const defaultProps = {
	/* Empty default props */
};

const WrapperComponent = props => {
	const style = props.style || {};

	const parseClasses = () => {
		let classes = ["smpladmin_Wrapper"];
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={style} {...props}>
				{props.children ? props.children : null}
			</div>
		</React.Fragment>
	);
};

WrapperComponent.propTypes = propTypes;
WrapperComponent.defaultProps = defaultProps;

export default WrapperComponent;
