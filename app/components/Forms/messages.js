/*
 * User Form Messages
 *
 * This contains all the text for the Form components.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Forms';

export default defineMessages({
  login: {
    id: `${scope}.Login.signin`,
    defaultMessage: 'Masuk Bisnis Kit Kamu',
  },
  loginFieldEmail: {
    id: `${scope}.Login.field.email`,
    defaultMessage: 'Email Kamu',
  },
  loginFieldPassword: {
    id: `${scope}.Login.field.password`,
    defaultMessage: 'Password Kamu',
  },
  loginForgotPassword: {
    id: `${scope}.Login.field.forgot`,
    defaultMessage: 'Lupa Kata Sandi',
  },
  loginRemember: {
    id: `${scope}.Login.field.remember`,
    defaultMessage: 'Ingat Saya',
  },
  loginButtonContinue: {
    id: `${scope}.Login.button.continue`,
    defaultMessage: 'Masuk',
  },
  resetTitle: {
    id: `${scope}.Reset.title`,
    defaultMessage: 'Reset Kata Sandi',
  },
  resetSubtitle: {
    id: `${scope}.Reset.subtitle`,
    defaultMessage: 'Silakan masukan email kamu dengan benar',
  },
  resetButton: {
    id: `${scope}.Reset.button`,
    defaultMessage: 'Kirim',
  },
  lockHint: {
    id: `${scope}.Lock.hint`,
    defaultMessage: 'Hint: Type anything to unlock!',
  },
  requiredForm: {
    id: `${scope}.Required.text`,
    defaultMessage: 'Required',
  },
});
