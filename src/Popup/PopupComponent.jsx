import React from "react";
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
	onClose: PropTypes.func
};

const defaultProps = {
	label: "Popup Label",
	hint: null,
	type: "normal",
	footer: null,
	style: {},
	time: 0, // in seconds
	onClose: () => {}
};

const PopupComponent = props => {
	const style = props.style || {};

	const parseClasses = () => {
		let classes = ["smpladmin_Popup"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	const bodyClass = props.type === "message" ? "smpladmin_message" : "";

	let time = props.time || null;
	let timeInterval = null;
	const calculateTime = () => {
		time--;
		if (time === 0 && props.onClose) {
			clearInterval(timeInterval);
			props.onClose();
		}
	};
	if (time && props.visible) {
		timeInterval = setInterval(function() {
			calculateTime();
		}, 1000);
	}

	const handleOnClose = () => {
		if (props.onClose) {
			if (timeInterval) clearInterval(timeInterval);
			props.onClose();
		}
	};

	return (
		<React.Fragment>
			{props.visible ? (
				<React.Fragment>
					<div className={"smpladmin_Reveal"} />
					<div className={parseClasses()} style={style}>
						<button
							className="smpladmin_Popup_CloseButton"
							onClick={handleOnClose}
						>
							&times;
						</button>
						<h1>{props.label ? props.label : null}</h1>
						{props.hint ? (
							<p className="smpladmin_Popup_Hint">{props.hint}</p>
						) : null}
						<p className={bodyClass}>
							{props.children ? props.children : null}
						</p>
						{props.footer ? (
							<div className="smpladmin_Popup_Footer">
								{props.footer}
							</div>
						) : null}
					</div>
				</React.Fragment>
			) : null}
		</React.Fragment>
	);
};

PopupComponent.propTypes = propTypes;
PopupComponent.defaultProps = defaultProps;

export default PopupComponent;
