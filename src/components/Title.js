import styled from "styled-components";

const Title = () => {
  return (
    <Layout>
      <FirstText>adène</FirstText>
      <SecondText>groupe</SecondText>
    </Layout>
  );
};

const Layout = styled.div`
  width: 243px;
  height: 121px;
  opacity: 1;
  margin-left: 257px;
  margin-top: 365px;
  display: inline-block;
`;

const FirstText = styled.div`
  font-size: 85px;
  margin-top: -29px;
  font-weight: bold;
  color: white;
`;
const SecondText = styled.div`
  font-size: 40px;
  margin-top: -29px;
  font-weight: bold;
  color: white;
`;

export default Title;
