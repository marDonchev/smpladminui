/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./_theme_default.scss";
import ButtonComponent from "./Button/ButtonComponent.jsx";
import CardComponent from "./Card/CardComponent.jsx";
import DropmenuComponent from "./Dropmenu/DropmenuComponent.jsx";
import IconComponent from "./Icon/IconComponent.jsx";
import LayoutComponent from "./Layout/LayoutComponent.jsx";
import ListComponent from "./List/ListComponent.jsx";
import PageComponent from "./Page/PageComponent.jsx";
import PopupComponent from "./Popup/PopupComponent.jsx";
import WrapperComponent from "./Wrapper/WrapperComponent.jsx";

// export default class ButtonComponent extends Component {
//   static propTypes = {
//     text: PropTypes.string
//   };

//   render() {
//     const { text } = this.props;

//     return <div className={styles.test}>Example Component: {text}</div>;
//   }
// }

//import ButtonComponent from "ButtonComponent";
// import CardComponent from "Card/CardComponent";
// import DropmenuComponent from "Dropmenu/DropmenuComponent";
// import IconComponent from "Icon/IconComponent";
// import LayoutComponent from "Layout/LayoutComponent";
// import ListComponent from "List/ListComponent";
// import PageComponent from "Page/PageComponent";
// import PopupComponent from "Popup/PopupComponent";
// import WrapperComponent from "Wrapper/WrapperComponent";

// Theming
// import "./_theme_default.scss";

export default ButtonComponent;

export {
  // BoilerplateComponent,
  ButtonComponent,
  CardComponent,
  DropmenuComponent,
  IconComponent,
  LayoutComponent,
  ListComponent,
  PageComponent,
  PopupComponent,
  WrapperComponent
};

// TODO: Adding documentation
// TODO: Fix the props of each component to be named and defaulted well
