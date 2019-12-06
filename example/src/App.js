import React, { Component } from "react";

import {
  ButtonComponent,
  CardComponent,
  DropmenuComponent,
  LayoutComponent,
  ListComponent,
  PageComponent,
  PopupComponent,
  WrapperComponent
} from "smpladminui";

export default class App extends Component {
  render() {
    return (
      <div>
        <ButtonComponent text="Modern React component module" />
        <hr style={{ clear: "both" }} size="1" noshade="noshade" />
        <CardComponent />
        <hr style={{ clear: "both" }} size="1" noshade="noshade" />
        <DropmenuComponent style={{ float: "right" }} />
        <hr style={{ clear: "both" }} size="1" noshade="noshade" />
        <LayoutComponent />
        <hr style={{ clear: "both" }} size="1" noshade="noshade" />
        <ListComponent />
        <hr style={{ clear: "both" }} size="1" noshade="noshade" />
        <PageComponent />
        <hr style={{ clear: "both" }} size="1" noshade="noshade" />
        <PopupComponent />
        <hr style={{ clear: "both" }} size="1" noshade="noshade" />
        <WrapperComponent />
      </div>
    );
  }
}
