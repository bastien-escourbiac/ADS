import styled from "styled-components";
import GroupeIcon from "../assets/Groupe.svg";

const Groupe = () => {
  return (
    <LogoWrapper>
      <img src={GroupeIcon} />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  width: 71px;
  height: 71px;
  margin-left: 135px;
  margin-top: 760px;
  background: white;
`;

export default Groupe;
