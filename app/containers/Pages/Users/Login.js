import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'enl-components';
import logo from 'enl-images/logo-light.png';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from 'enl-components/Forms/user-jss';
import { FormattedMessage } from 'react-intl';
import { loginWithEmail } from 'enl-redux/actions/authActions';
import messages from './messages';
import Axios from 'axios';

//import url api
import { url } from '../../../config/config_api';

class Login extends React.Component {
  state = {
    valueForm: [],
    loading: false,

  }

  componentDidMount(){
    const params = new URL(document.location.href);
    const token = params.searchParams.get('token');

    if (token) {
      this.setState({
        ...this.state,
        loading: true
      });

      Axios.post(`${url}/login/direct`, {
        token,
      }).then(res => {
        const { data } = res;

        this.setState({
          ...this.state,
          loading: false
        });

        if (data && data.data) {
          localStorage.setItem('token', token);
          localStorage.setItem('email', data.data.email);
          localStorage.setItem('name', data.data.name);
          localStorage.setItem('midtrans_account', data.data.midtrans_account);
          localStorage.setItem('stepper', data.data.stepper);

          let toko = data.data.toko
      
          localStorage.setItem('domain', toko[0].domain);
          localStorage.setItem('toko_id', toko[0].id);

          this.props.history.push('/admin');
        }
      }).catch(err => {
        this.setState({
          ...this.state,
          loading: false,
          errors: err.response.data.errors
        });
      });
    }
  }

  submitForm(values) {
    const { valueForm } = this.state;
    setTimeout(() => {
      this.setState({ valueForm: values });
      this.props.handleLogin(valueForm.get('email'), valueForm.get('password')); // eslint-disable-line
      
    }, 500); // simulate server latency
  }

  render() {
    const title = 'Langgan Bisnis Kit - Login';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.rootFull}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>


        <div className={classes.containerSide}>
          <Hidden smDown>
            <div className={classes.opening}>
              <div className={classes.openingWrap}>
                <div className={classes.openingHead}>
                  <NavLink to="/" className={classes.brand}>
                    <img src={logo} alt={brand.name} style={{width:120}}/>
                  </NavLink>
                </div>
                <Typography variant="h3" component="h1" gutterBottom>
                  <FormattedMessage {...messages.welcomeTitle} />
                  &nbsp;
                  {brand.name}
                </Typography>
                <Typography variant="h6" component="p" className={classes.subpening}>
                  <FormattedMessage {...messages.welcomeSubtitle} />
                </Typography>
              </div>
              <div className={classes.openingFooter}>
                <a href="https://langgan.id/" className={classes.back}>
                  <ArrowBack />
                  &nbsp;&nbsp;&nbsp; Menuju Langgan
                </a>
              </div>
            </div>
          </Hidden>
          <div className={classes.sideFormWrap}>
            <LoginForm onSubmit={(values) => this.submitForm(values)} />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

function LoginWrap(props) {
  const { handleLoginWithEmail } = props;
  const LoginStyled = withStyles(styles)(Login);
  return (
    <LoginStyled handleLogin={handleLoginWithEmail} />
  );
}

LoginWrap.propTypes = {
  handleLoginWithEmail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state: state.get('authReducer')
});

const mapDispatchToProps = dispatch => ({
  handleLoginWithEmail: bindActionCreators(loginWithEmail, dispatch)
});

const LoginMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWrap);

export default LoginMapped;
