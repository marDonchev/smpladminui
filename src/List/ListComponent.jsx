import React from "react";
import PropTypes from "prop-types";

import "./ListComponent.scss";
import Button from "./../Button/ButtonComponent";
import Icon from "./../Icon/IconComponent";

const propTypes = {
	header: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
	list: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
	footer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	style: PropTypes.object
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
	style: {}
};

const ListComponent = props => {
	const style = props.style || {};

	// const handleClick = e => {
	// 	if (props.onClick) props.onClick(e.target.value);
	// };

	const parseClasses = () => {
		let classes = ["smpladmin_List"];
		if (props.primary) classes.push("smpladmin_primary");
		if (props.danger) classes.push("smpladmin_danger");
		if (props.processing) classes.push("smpladmin_processing");
		return classes.join(" ");
	};

	return (
		<React.Fragment>
			<div className={parseClasses()} style={style}>
				<table>
					<thead>
						<tr>
							{props.header &&
								props.header.map((h, hIndex) => {
									return <th key={hIndex}>{h}</th>;
								})}
						</tr>
					</thead>
					<tbody>
						{props.list
							? props.list.map((l, lIndex) => {
									let content = (
										<tr key={lIndex}>
											{l.map((le, leIndex) => {
												return (
													<td key={leIndex}>{le}</td>
												);
											})}
										</tr>
									);
									return content;
							  })
							: null}
					</tbody>
				</table>
				<div className="smpladmin_List_Footer">
					{props.footer ? props.footer : null}
				</div>
			</div>

			{/* <div className={parseClasses()} style={style}>
				<div className="smpladmin_Card_Header">
					{props.header}
					<i
						className="smpladmin_icon_bookmark_on_grey"
						style={{ float: "right" }}
					/>
				</div>
				<div
					className={
						props.type === "children"
							? "smpladmin_Card_Body"
							: props.type === "file"
							? props.fileType
								? "smpladmin_Card_Body smpladmin_Card_BodyFile " +
								  props.fileType
								: "smpladmin_Card_Body smpladmin_Card_BodyFile"
							: "smpladmin_Card_Body smpladmin_Card_BodyImage"
					}
					style={
						props.type === "image"
							? {
									backgroundImage: `url(${Image})`
							  }
							: null
					}
				>
					{props.children ? props.children : null}
				</div>
				<div className="smpladmin_Card_Footer">{props.footer}</div>
			</div> */}
		</React.Fragment>
	);
};

ListComponent.propTypes = propTypes;
ListComponent.defaultProps = defaultProps;

export default ListComponent;
