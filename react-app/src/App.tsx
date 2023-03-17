import React from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Div>
      <H1>Start react 200!</H1>
      <p>HTML 적용하기</p>
    </Div>
  );
}

export default App;

const Div = styled.div`
  background-color: rgb(162, 127, 243);
  color: rgb(255, 255, 255);
  padding: 40px;
  font-family: 고딕;
  text-align: center;
`;
const H1 = styled.h1`
  color: white;
  background-color: #2efe2e;
  padding: 10px;
  font-family: 궁서;
`;
