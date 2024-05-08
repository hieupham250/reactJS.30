import React, { Component } from "react";

interface Props {}
interface State {
  time: Date;
}

export default class B9 extends Component<Props, State> {
  currentTime: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount(): void {
    this.currentTime = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.currentTime);
  }
  tick() {
    this.setState({ time: new Date() });
  }
  render() {
    return (
      <>
        <p>Thời gian hiện tại: {this.state.time.toLocaleTimeString()}</p>
      </>
    );
  }
}
