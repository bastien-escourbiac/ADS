import styled from "styled-components";
import Icon from "../assets/Icon.svg";

const Form = () => {
  return (
    <LayoutTitle>
      <Title>Bienvenue</Title>
      <Description>Lorem ipsum dolores sed amet diem tempur</Description>
      <LayoutInformation>
        <Label>
          <Input placeholder="Email"></Input>
        </Label>
        <Label>
          <Input placeholder="Mot de passe"></Input>
          <HideButton>
            <img src={Icon} />
          </HideButton>
        </Label>
        <Button>Valider</Button>
        <ForgotPassword>Mot de passe oublié ?</ForgotPassword>
      </LayoutInformation>
    </LayoutTitle>
  );
};

const LayoutTitle = styled.div`
  width: 589px;
  height: 674px;
  margin-top: 88px;
  margin-left: 288px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 13px;
  opacity: 1;
  display: inline-block;
`;

const LayoutInformation = styled.div`
  margin-top: 70px;
  width: 589px;
  height: 452px;
  background: #3a3d4b 0% 0% no-repeat padding-box;
  border-radius: 13px;
  opacity: 1;
`;

const Title = styled.div`
  margin-top: 78px;
  margin-left: 94px;
  width: 162px;
  height: 46px;
  text-align: left;
  font: normal normal 300 33px/46px Hero New;
  letter-spacing: 0px;
  color: #3c4450;
  opacity: 1;
`;

const Description = styled.div`
  margin-left: 94px;
  margin-top: 7px;
  text-align: left;
  font: normal normal medium 16px/23px Hero New;
  letter-spacing: 0px;
  color: #3c4450;
  opacity: 1;
`;

const Button = styled.button`
  width: 216px;
  height: 65px;
  margin-top: 46px;
  background: #86d654 0% 0% no-repeat padding-box;
  border-radius: 63px;
  opacity: 1;
  border: unset;
  margin-left: 186px;
  font: normal normal medium 18px/25px Hero New;
  font-size: 18px;
  color: #ffffff;
  outline-style: none;
`;

const ForgotPassword = styled.button`
  width: 130px;
  height: 17px;
  margin-top: 34px;
  margin-left: 233px;
  font: normal normal medium 12px/17px Hero New;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: left;
  font-size: 12px;
  border: unset;
  background: #3a3d4b 0% 0% no-repeat padding-box;
`;

const Label = styled.label`
  margin-top: 61px;
  margin-left: 84px;
  width: 427px;
  height: 70px;
  background: #676e79 0% 0% no-repeat padding-box;
  border-radius: 13px;
  display: inline-block;
  border: unset;
`;

const Input = styled.input`
  width: 330px;
  height: 30px;
  margin-left: 29px;
  margin-top: 20px;
  background: #676e79 0% 0% no-repeat padding-box;
  outline-style: none;
  border: unset;
  font: normal normal medium 14px/20px Hero New;
  color: white;
  ::placeholder {
    color: white;
    font: normal normal medium 14px/20px Hero New;
  }
`;

const HideButton = styled.button`
  margin-left: 10px;
  width: 26px;
  height: 19px;
  padding: 0px;
  background: #676e79 0% 0% no-repeat padding-box;
  border: unset;
`;

export default Form;
