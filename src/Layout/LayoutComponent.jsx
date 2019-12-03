import React from "react";
import PropTypes from "prop-types";

import "./LayoutComponent.scss";

import Icon from "./../Icon/IconComponent";

const propTypes = {
	leftLabel: PropTypes.string,
	leftSublabel: PropTypes.string,
	centerLabel: PropTypes.string,
	centerSublabel: PropTypes.string,
	centerRightIcon: PropTypes.object,
	centerRightText: PropTypes.string,
	progress: PropTypes.number,
	style: PropTypes.object
};

const defaultProps = {
	leftLabel: "left Label",
	leftSublabel: "Left Sublabel",
	centerLabel: "Please login to the system first",
	centerSublabel: "Total of 1,567,234 hits this month",
	centerRightIcon: <Icon type={"logout"} variant={"grey"} />,
	centerRightText: "Martin D.",
	progress: null,
	sidebarElements: [
		{
			type: "item",
			label: "Dashboard",
			description: "This is explanation about the dashboard section",
			icon: <Icon type={"dashboard"} variant={"white"} />,
			selected: true
		},
		{ type: "section", label: "MAIN SECTION" },
		{
			type: "item",
			label: "Structure",
			description: "This is explanation about the dashboard section",
			icon: <Icon type={"structure"} variant={"white"} />,
			selected: false
		},
		{
			type: "item",
			label: "Static Content",
			description: "This is explanation about the dashboard section",
			icon: <Icon type={"static"} variant={"white"} />,
			selected: false
		},
		{
			type: "item",
			label: "Collections",
			description: "This is explanation about the dashboard section",
			icon: <Icon type={"collections"} variant={"white"} />,
			selected: false
		},
		{
			type: "item",
			label: "Files",
			description: "This is explanation about the dashboard section",
			icon: <Icon type={"files"} variant={"white"} />,
			selected: false
		},
		{ type: "section", label: "DEVELOPERS SECTION" },
		{
			type: "item",
			label: "Project Settings",
			description: "This is explanation about the dashboard section",
			icon: <Icon type={"projectsettings"} variant={"white"} />,
			selected: false
		}
	]
};

const LayoutComponent = props => {
	const style = props.style || {};

	const parseClasses = () => {
		let classes = ["smpladmin_Layout"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={style}>
				<div className="smpladmin_Layout_TopHeader">
					<div>
						<h1>{props.leftLabel}</h1>
						<h2>{props.leftSublabel}</h2>
					</div>
					<div>
						<h1>{props.centerLabel}</h1>
						<h2>{props.centerSublabel}</h2>
						{props.progress != null ? (
							<div className="success smpladmin_progress">
								<div
									className="smpladmin_progress-meter"
									style={{ width: props.progress + "%" }}
								></div>
							</div>
						) : null}

						{props.centerRightIcon ? props.centerRightIcon : null}
						{props.centerRightText ? (
							<h3>{props.centerRightText}</h3>
						) : null}
					</div>
				</div>
				<div className="smpladmin_Layout_MidBody">
					<div className="smpladmin_Layout_SideBar">
						{props.sidebarElements &&
							props.sidebarElements.map((se, seIndex) => {
								if (se.type === "item") {
									return (
										<div
											key={seIndex}
											className={
												!se.selected
													? "smpladmin_Layout_SideBar_item"
													: "smpladmin_Layout_SideBar_item smpladmin_selected"
											}
										>
											{se.icon ? se.icon : null}
											<h1>{se.label}</h1>
											<h2>{se.description}</h2>
										</div>
									);
								}

								if (se.type === "section") {
									return (
										<div
											key={seIndex}
											className="smpladmin_Layout_SideBar_Section"
										>
											{se.label}
										</div>
									);
								}
								return null;
							})}

						<div className="smpladmin_Layout_Footer">
							<span>Martin D.</span>
							<Icon type={"settings"} variant={"white"} />
						</div>
					</div>
					<div className="smpladmin_Layout_Page">
						{props.children ? props.children : null}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

LayoutComponent.propTypes = propTypes;
LayoutComponent.defaultProps = defaultProps;

export default LayoutComponent;
