import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Keep track all your expenses now.</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  //startLogin props dispatch startLogin action
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);