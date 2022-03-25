import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";
import { Illustrations, CloseIcon } from "../assets";
import { useSpring, animated } from 'react-spring';


const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.formElementBackground};
  color: ${({ theme }) => theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${props => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 40px;
  top: 40px;
  border: none;
  background: none;
  width: 24px;
  height: 24px;
  padding: 0;
`

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0)' : 'translateY(-200%)'
  })

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={Illustrations.SignUp} alt="Sign up for an account" aria-hidden="true" />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>
          Sign up today to get access to all of our content ad features!
        </SignUpText>
        <PrimaryButton>
          Sign Up
        </PrimaryButton>
        <CloseModalButton aria-label="Close Modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>

    </animated.div>
  )
}
