import React, { Component } from "react";

class R005_LifecycleEx extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }
  render() {
    console.log("3. render call");
    return <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>;
  }
}

export default R005_LifecycleEx;
