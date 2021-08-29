import React from "react";
import { MDBIcon } from "mdbreact";
import styled from "styled-components";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";

import { BankContainer } from "./ChooseBank";

import Image from "assets/images/banklogin.png";

const ChooseBankLogin = ({
  bank,
  handleNextStep,
  handlePrevStep,
  handleClose,
}) => {
  return (
    <BankContainer>
      <div style={{ height: "70%", width: "100%" }} />
      {/* <img
        onClick={handleClose}
        src={Image}
        alt="Bank Header"
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          height: "65%",
          backgroundSize: "cover",
          cursor: "pointer",
        }}
      /> */}
      <OptionsContainer>
        <LoginOption onClick={handleNextStep}>
          <span className="mr-4">
            <HiOutlineDesktopComputer size="1.5rem" />
          </span>
          <div>
            <h6>
              Log in with Internet Banking <MDBIcon icon="arrow-right" />
            </h6>
            Click here to use the credentials you use with your {bank.name}{" "}
            internet banking
          </div>
        </LoginOption>
        <LoginOption>
          <span className="mr-4">
            <AiOutlineMobile size="1.5rem" />
          </span>
          <div>
            <h6>
              Log in with Mobile Banking <MDBIcon icon="arrow-right" />
            </h6>
            Click here to use the credentials you use with your {bank.name}{" "}
            mobile banking
          </div>
        </LoginOption>
      </OptionsContainer>
    </BankContainer>
  );
};

export default ChooseBankLogin;

const OptionsContainer = styled.div`
  margin: 1rem -1.6rem -1.5rem;
  height: fit-content;
  border-radius: 0 0 50px 50px;
  background-color: white;
  height: 50%;
  padding-top: 2rem;
`;

const LoginOption = styled.div`
  display: flex;
  padding: 0rem 2rem 1rem;
  color: black;
  cursor: pointer;
  div {
    font-size: 0.8rem;
    width: 80%;
  }

  h6 {
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }

  span {
    border-radius: 50%;
    background-color: #e24407;
    display: grid;
    place-items: center;
    height: 45px;
    width: 50px;
    color: white;
    margin: auto 0;
  }
`;
