import React from 'react';
import styled from 'styled-components';
import { Switch, Redirect, Route } from 'react-router-dom';

import SignUp from 'components/auth/SignUp';
import Login from 'components/auth/Login';
import VerifyEmail from 'components/auth/VerifyEmail';
import AccountVerified from 'components/modals/AccountVerified';
import ForgotPassword from 'components/auth/ForgotPassword';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Auth = () => {
  return (
    <Container>
      <Switch>
        <Redirect exact from='/auth' to='/auth/login' />
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/signup' component={SignUp} />
        <Route path='/auth/verifyemail' component={VerifyEmail} />
        <Route path='/auth/verified' component={AccountVerified} />
        <Route path='/auth/forgotpassword' component={ForgotPassword} />
      </Switch>
    </Container>
  );
};

export default Auth;
