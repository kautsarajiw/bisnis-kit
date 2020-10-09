/*
 * Header Component
 *
 * This contains all the text for the Header Componen.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  fullScreen: {
    id: `${scope}.action.fullScreen`,
    defaultMessage: 'Mode Layar Penuh',
  },
  exitFullScreen: {
    id: `${scope}.action.exitFullScreen`,
    defaultMessage: 'Keluar Mode Layar Penuh',
  },
  lamp: {
    id: `${scope}.action.lamp`,
    defaultMessage: 'Mode Gelap/Terang',
  },
  guide: {
    id: `${scope}.action.guide`,
    defaultMessage: 'Panduan Singkat',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search Ui',
  },
  profile: {
    id: `${scope}.user.profile`,
    defaultMessage: 'My Profile',
  },
  task: {
    id: `${scope}.user.task`,
    defaultMessage: 'My Task',
  },
  email: {
    id: `${scope}.user.email`,
    defaultMessage: 'My Inbox',
  },
  logout: {
    id: `${scope}.user.logout`,
    defaultMessage: 'Log Out',
  },
  login: {
    id: `${scope}.user.login`,
    defaultMessage: 'Keluar',
  }
});
