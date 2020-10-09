import React from 'react';
import Outer from '../../Templates/Outer';
import { Login } from '../../pageListAsync';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class CheckLoginDedicated extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isLogin:false
    }
  }

  render() {
    const statusLogin = this.props;
    return (
      <>
        {
          statusLogin.loggedIn
            ?
              <Redirect to={'/app/dashboard'} />
            :
              <Outer>
                <Login />
              </Outer>
        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  statusLogin: state.get('authReducer')
});

const mapDispatchToProps = dispatch => ({

});

const LoginMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckLoginDedicated);

export default LoginMapped;
