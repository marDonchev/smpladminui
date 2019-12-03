import React from "react";
import PropTypes from "prop-types";

import "./DropmenuComponent.scss";

import Icon from "./../Icon/IconComponent";

const propTypes = {
	style: PropTypes.object
};

const defaultProps = {
	options: [
		{
			icon: <Icon type={"listtype_list"} variant={"grey"} />,
			label: "View as List",
			onClick: null
		},
		{
			icon: <Icon type={"listtype_cards"} variant={"grey"} />,
			label: "View as Cards",
			onClick: () => {
				alert("test");
			}
		}
	]
};

const DropmenuComponent = props => {
	const style = props.style || {};

	const parseClasses = () => {
		let classes = ["smpladmin_Dropmenu"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={style} {...props}>
				<button></button>

				<div className="smpladmin_Dropmenu_Options">
					{props.options &&
						props.options.map((o, oIndex) => {
							return (
								<div
									key={oIndex}
									className="smpladmin_Dropmenu_Option"
									onClick={e =>
										typeof o.onClick == "function"
											? o.onClick()
											: null
									}
								>
									{o.icon}
									{o.label}
								</div>
							);
						})}
				</div>
			</div>
		</React.Fragment>
	);
};

DropmenuComponent.propTypes = propTypes;
DropmenuComponent.defaultProps = defaultProps;

export default DropmenuComponent;
