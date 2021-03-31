import styled from "styled-components";

import Form from "./components/Form";
import Title from "./components/Title";
import Groupe from "./components/Groupe";

function App() {
  return (
    <Wrapper>
      <Title />
      <Form />
      <Groupe />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: transparent linear-gradient(133deg, #30b7f3 0%, #306cf3 100%) 0%
    0% no-repeat padding-box;
  top: 0px;
  left: 0px;
  width: 1600px;
  height: 850px;
  opacity: 1;
  display: flex;
`;

export default App;
