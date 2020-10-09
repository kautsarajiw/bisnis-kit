import {
  call, fork, put, take, takeEvery, all
} from 'redux-saga/effects';
import { firebaseAuth, firebaseDb } from '../../firebase';
import history from '../../utils/history';
import {
  LOGIN_REQUEST,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGOUT_REQUEST,
  PASSWORD_FORGET_REQUEST,
} from '../constants/authConstants';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  loginWithEmailSuccess,
  loginWithEmailFailure,
  syncUser,
  passwordForgetSuccess,
  passwordForgetFailure,
} from '../actions/authActions';

function getUrlVars() {
  const vars = {};
  const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { // eslint-disable-line
    vars[key] = value;
  });
  return vars;
}

function* loginSaga(provider) {
  try {
    const data = yield call(firebaseAuth.signInWithPopup, provider.payload.authProvider);
    yield put(loginSuccess(data));
    if (getUrlVars().next) {
      // Redirect to next route
      yield history.push(getUrlVars().next);
    } else {
      // Redirect to dashboard if no next parameter
      yield history.push('/app');
    }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* loginWithEmailSaga(payload) {
  try {
    const data = yield call(firebaseAuth.signInWithEmailAndPassword, payload.email, payload.password);
    yield put(loginWithEmailSuccess(data));
    if (getUrlVars().next) {
      // Redirect to next route
      yield history.push('/app/' + getUrlVars().next);
    } else {
      // Redirect to dashboard if no next parameter
      yield history.push('/app');
    }
  } catch (error) {
    yield put(loginWithEmailFailure(error));
  }
}

function* logoutSaga() {
  try {
    const data = yield call(firebaseAuth.signOut);
    yield put(logoutSuccess(data));
    // Redirect to home
    yield history.replace('/');
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function* syncUserSaga() {
  const channel = yield call(firebaseAuth.channel);
  while (true) {
    const { user } = yield take(channel);
    if (user) {
      yield put(syncUser(user));
    } else {
      yield put(syncUser(null));
    }
  }
}

function* passwordForgetSaga({ email }) {
  try {
    yield call(firebaseAuth.sendPasswordResetEmail, email);
    yield put(passwordForgetSuccess());
  } catch (error) {
    yield put(passwordForgetFailure(error));
  }
}


//= ====================================
//  WATCHERS
//-------------------------------------

function* loginRootSaga() {
  yield fork(syncUserSaga);
  yield all([
    takeEvery(LOGIN_REQUEST, loginSaga),
    takeEvery(LOGIN_WITH_EMAIL_REQUEST, loginWithEmailSaga),
    takeEvery(LOGOUT_REQUEST, logoutSaga),
    takeEvery(PASSWORD_FORGET_REQUEST, passwordForgetSaga)
  ]);
}

const authSagas = [
  fork(loginRootSaga),
];

export default authSagas;
