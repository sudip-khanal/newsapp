import React, { Component } from "react";
import loading from "./loading.gif";

export class Spiner extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={loading} alt={loading} />
      </div>
    );
  }
}

export default Spiner;
