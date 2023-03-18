import React, { Component } from "react";

interface IProps {
  prop_value: any;
}

class R006_LifecycleEx extends Component<IProps> {
  static getDerivedStateFromProps(props: any, state: any) {
    console.log("2. getDerivedStateFromProps call: " + props.prop_value);
    return {};
  }
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

export default R006_LifecycleEx;
