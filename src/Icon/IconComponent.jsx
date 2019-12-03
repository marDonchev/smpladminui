import React from "react";
import PropTypes from "prop-types";

import "./IconComponent.scss";

const propTypes = {
	type: PropTypes.string.isRequired,
	variant: PropTypes.string.string,
	onClick: PropTypes.func,
	style: PropTypes.object,
	disabled: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.func,
		PropTypes.string
	]),
	processing: PropTypes.bool
};

const defaultProps = {
	type: "settings",
	variant: "grey",
	disabled: false,
	processing: false,
	onClick: () => {}
};

const IconComponent = props => {
	const style = props.style || {};

	const handleClick = e => {
		if (props.onClick) props.onClick(e.target.value);
	};

	const parseClasses = () => {
		let classes = ["smpladmin_Icon"];
		if (props.type)
			classes.push("smpladmin_icon_" + props.type + "_" + props.variant);
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<i
				className={parseClasses()}
				style={style}
				onClick={handleClick}
				{...props}
			/>
		</React.Fragment>
	);
};

IconComponent.propTypes = propTypes;
IconComponent.defaultProps = defaultProps;

export default IconComponent;
