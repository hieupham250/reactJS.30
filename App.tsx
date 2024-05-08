import React, { Component } from "react";
// import B1 from "./components/B1";
// import B2 from "./components/B2";
// import B3 from "./components/B3";
// import B4 from "./components/B4";
// import B5 from "./components/B5";
// import B6 from "./components/B6";
// import B7 from "./components/B7";
// import B8 from "./components/B8";
import B9 from "./components/B9";
// import B10 from "./components/B10";

interface Props {}
interface State {
  status: string;
  message: string;
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      status: "Open the form",
      message: "Interface Rendering",
    };
  }
  updateStatus = () => {
    this.setState({
      status: "Close the form",
    });
  };
  updateMessage = () => {
    this.setState({
      message: "Interface",
    });
  };
  render() {
    return (
      <>
        {/* <B1></B1> */}
        {/* <B2></B2> */}
        {/* <B3></B3> */}
        {/* <B4></B4> */}

        {/* <B5 status={this.state.status}></B5>
        <button onClick={this.updateStatus}>Change status</button> */}

        {/* <B6 massage={this.state.message}></B6>
        <button onClick={this.updateMessage}>Change message</button> */}
        {/* <B7></B7> */}
        {/* <B8></B8> */}
        <B9></B9>
        {/* <B10></B10> */}
      </>
    );
  }
}
