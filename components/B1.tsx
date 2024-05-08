import React, { Component } from "react";

interface Props {}
interface State {
  userName: string;
}

export default class B1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  componentWillMount(): void {
    this.setState({
      userName: "Phạm Trung Hiếu",
    });
  }

  render() {
    return (
      <>
        <p>User name: {this.state.userName}</p>
      </>
    );
  }
}
