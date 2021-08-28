import { Component } from "react";

class LoadingBox extends Component {
  render() {
    return (
      <>
        <span style={{ color: "red", fontSize: "20px" }}>Loading......</span>{" "}
        <i className="fa fa-spinner fa-spin"></i>
      </>
    );
  }
}

export default LoadingBox;
