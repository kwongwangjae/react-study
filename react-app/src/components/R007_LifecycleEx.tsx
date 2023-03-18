import React, { Component } from "react";

interface IProps {
  prop_value: any;
  tmp_state: any;
}

export {};
//any삽입을 통한 tmp_state 원인: 해당 요소의 상태 개체를 입력하지 않았기 때문에 발생
class R007_LifecycleEx extends Component<IProps, any> {
  static getDerivedStateFromProps(props: any, state: any) {
    console.log("2. getDerivedStateFromProps call: " + props.prop_value);
    return {};
  }
  constructor(props: any) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  componentDidMount() {
    console.log("4. componentDidMount Call");
    console.log("5. tmp_state : " + this.state.tmp_state);
  }
  render() {
    console.log("3. render call");
    return <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>;
  }
}

export default R007_LifecycleEx;
