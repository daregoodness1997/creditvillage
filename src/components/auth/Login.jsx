import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GlassModal from '../modals/GlassModal';
import CreditButton from '../buttons/Button';
import CustomInput from '../inputs/CustomInput';
import PasswordInput from '../inputs/PasswordInput';
import usePasswordToggle from '../../hooks/usePasswordToggle';
import { Form } from './SignUp';
import Image from '../../assets/images/signin-abstract.svg';
import { Wrapper } from './SignUp';
import styled from 'styled-components';
import { Content } from './SignUp';

const Login = ({ history }) => {
  const [Type, Toggle] = usePasswordToggle();
  const [showIcon, setShowIcon] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitting');
    history.replace('/home');
  };

  const handlePasswordChange = event => {
    const {
      target: { value },
    } = event;
    const hideIcon = value.length < 1 ? false : true;
    setShowIcon(hideIcon);
  };
  return (
    <Wrapper className='d-flex h-100'>
      <Sidebar>
        <h1>Welcome back, Pick up where you left off with your finances</h1>
      </Sidebar>
      <Content className='d-flex justify-content-center align-items-center flex-column'>
        <h1>Jump right back in!</h1>
        <p>Keep track of your credits</p>
        <Form autoComplete='off' onSubmit={handleSubmit}>
          <CustomInput
            type='email'
            name='email'
            placeholder='Email'
            autoComplete='off'
            required
          />
          <PasswordInput
            type={Type}
            name='password'
            placeholder='Password'
            autoComplete='off'
            onChange={handlePasswordChange}
            showIcon={showIcon}
            icon={Toggle}
            required
          />
          <ForgotPassword>
            <Link to='/auth/forgotpassword'> Forgot Password</Link>
          </ForgotPassword>
          <CreditButton
            styles={{
              fontSize: '20px',
              fontWeight: '600',
              borderRadius: '50px',
              maxWidth: '480px',
            }}
            className='w-100 my-1'
            type='submit'
            inverted
          >
            Register
          </CreditButton>
        </Form>
        <p>
          Don’t have an account? <Link to='/auth/signup'> Create Account</Link>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Login;

const Sidebar = styled.aside`
  background: var(--bg-primary) url(${Image}) no-repeat scroll 5% 100%;
  border-radius: 0px 50px 50px 0px;
  background-size: contain;
  max-width: 520px;
  max-height: 900px;
  width: 35%;
  padding: 9rem 3rem 0;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: clamp(1.4rem, 2vw, 1.5rem);
    line-height: 28px;
    max-width: 283px;
    margin: 0 auto;
    color: var(--darkblue);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const ForgotPassword = styled.div`
  text-align: left !important;
  display: block;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
  a {
    font-size: clamp(1rem, 2vw, 1.13rem);
    /* white-space: nowrap; */
  }
`;
