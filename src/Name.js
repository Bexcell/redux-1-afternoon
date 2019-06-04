import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_NAME, UPDATE_CATEGORY } from "./../../store";
import "./Name.css";

class Name extends Component {
  // Several lines for the constructor and handler methods omitted
  saveChanges() {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    });
    store.dispatch({
      type: UPDATE_CATEGORY,
      payload: this.state.category
    });
  }
  // Several lines for the render omitted
}
export default Name;