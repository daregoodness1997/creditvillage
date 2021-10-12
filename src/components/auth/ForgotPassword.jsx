import React, { useState } from 'react';
import styled from 'styled-components';

import GlassModal from '../modals/GlassModal';
import CreditButton from '../buttons/Button';
import CustomInput from '../inputs/CustomInput';
const ForgotPassword = ({ history, email }) => {
  return (
    <Container className='w-100 d-flex flex-column flex-lg-row justify-content-between h-100'>
      <Title>
        <h1 className='font-weight-semi-bold'>Forgot Password</h1>
        <p>
          Don’t worry, it happens. Please enter the email address associated
          with your account
        </p>
      </Title>
      <VerifyModal className='align-self-center'>
        <CustomInput type='email' placeholder='Enter your email' />

        <p>Enter 6-digit OTP sent to your email</p>
        <EmailActions className='d-flex w-100 justify-content-center align-items-center mt-3'>
          <Button type='submit' inverted>
            Submit
          </Button>
        </EmailActions>
      </VerifyModal>
    </Container>
  );
};

export default ForgotPassword;

const Container = styled.div`
  padding: 5rem 3rem 3rem;
`;

const Title = styled.div`
  padding: 4rem 0;
  padding-right: 10rem;
  margin-left: 5%;
  h1 {
    color: var(--lightblue);
    font-size: 2.25rem;
    font-family: 'CamptonMedium';
  }
  p {
    color: var(--lighterblue);
    font-size: 1.5rem;
    &:last-child {
      color: var(--darkblue);
      cursor: pointer;
      width: fit-content;
    }
  }
`;

const VerifyModal = styled(GlassModal)`
  padding: 5rem 2rem;
  grid-gap: 1rem;
  width: 712px;
  max-height: 400px;
  /* width: auto; */
`;

const EmailActions = styled.div`
  span {
    color: var(--darkblue);
    cursor: pointer;
  }
`;

const Button = styled(CreditButton)`
  font-size: 18px;
  border-radius: 50px;
  line-height: 21px;
`;
