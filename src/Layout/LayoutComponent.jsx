import React, { Component } from "react";
import PropTypes from "prop-types";

import "./LayoutComponent.scss";

import Icon from "./../Icon/IconComponent.jsx";

const propTypes = {
  leftLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftSublabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  centerLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  centerSublabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  centerRightIcon: PropTypes.object,
  centerRightText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  footerLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  footerIcon: PropTypes.object,
  progress: PropTypes.number,
  style: PropTypes.object,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  processing: PropTypes.bool,
};

const defaultProps = {
  leftLabel: "left Label",
  leftSublabel: "Left Sublabel",
  centerLabel: "Please login to the system first",
  centerSublabel: "Total of 1,567,234 hits this month",
  centerRightIcon: <Icon type={"logout"} variant={"grey"} />,
  centerRightText: "Administrator",
  footerLabel: "Adminstrator",
  footerIcon: <Icon type={"settings"} variant={"white"} />,
  progress: null,
  sidebarElements: [
    {
      type: "item",
      label: "Dashboard",
      description: "This is explanation about the dashboard section",
      icon: <Icon type={"dashboard"} variant={"white"} />,
      selected: true,
      onClick: null,
    },
    { type: "section", label: "MAIN SECTION" },
    {
      type: "item",
      label: "Structure",
      description: "This is explanation about the dashboard section",
      icon: <Icon type={"structure"} variant={"white"} />,
      selected: false,
      onClick: null,
    },
    {
      type: "item",
      label: "Static Content",
      description: "This is explanation about the dashboard section",
      icon: <Icon type={"static"} variant={"white"} />,
      selected: false,
      onClick: null,
    },
    {
      type: "item",
      label: "Collections",
      description: "This is explanation about the dashboard section",
      icon: <Icon type={"collections"} variant={"white"} />,
      selected: false,
      onClick: null,
    },
    {
      type: "item",
      label: "Files",
      description: "This is explanation about the dashboard section",
      icon: <Icon type={"files"} variant={"white"} />,
      selected: false,
      onClick: null,
    },
    { type: "section", label: "DEVELOPERS SECTION" },
    {
      type: "item",
      label: "Project Settings",
      description: "This is explanation about the dashboard section",
      icon: <Icon type={"projectsettings"} variant={"white"} />,
      selected: false,
      onClick: null,
    },
  ],
  primary: false,
  danger: false,
  success: false,
  processing: false,
};

class LayoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  parseClasses = () => {
    let classes = ["smpladmin_Layout"];
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
          <div className="smpladmin_Layout_TopHeader">
            <div>
              <h1>{this.props.leftLabel}</h1>
              <h2>{this.props.leftSublabel}</h2>
            </div>
            <div>
              <h1>{this.props.centerLabel}</h1>
              <h2>{this.props.centerSublabel}</h2>
              {this.props.progress != null ? (
                <div className="success smpladmin_progress">
                  <div
                    className="smpladmin_progress-meter"
                    style={{ width: this.props.progress + "%" }}
                  ></div>
                </div>
              ) : null}

              {this.props.centerRightIcon ? this.props.centerRightIcon : null}
              {this.props.centerRightText ? (
                <h3>{this.props.centerRightText}</h3>
              ) : null}
            </div>
          </div>
          <div className="smpladmin_Layout_MidBody">
            <div className="smpladmin_Layout_SideBar">
              {this.props.sidebarElements &&
                this.props.sidebarElements.map((se, seIndex) => {
                  if (se.type === "item") {
                    return (
                      <div
                        key={seIndex}
                        className={
                          !se.selected
                            ? "smpladmin_Layout_SideBar_item"
                            : "smpladmin_Layout_SideBar_item smpladmin_selected"
                        }
                        onClick={
                          se.onClick && typeof se.onClick === "function"
                            ? se.onClick
                            : null
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
                <span>{this.props.footerLabel}</span>
                {this.props.footerIcon && this.props.footerIcon}
              </div>
            </div>
            <div className="smpladmin_Layout_Page">
              {this.props.children ? this.props.children : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

LayoutComponent.propTypes = propTypes;
LayoutComponent.defaultProps = defaultProps;

export default LayoutComponent;
