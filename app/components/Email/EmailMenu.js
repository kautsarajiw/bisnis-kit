import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import ReportIcon from '@material-ui/icons/Report';
import StarIcon from '@material-ui/icons/Star';
import Flag from '@material-ui/icons/Flag';
import People from '@material-ui/icons/People';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import LabelIcon from '@material-ui/icons/Label';
import Divider from '@material-ui/core/Divider';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './email-jss';

class EmailMenu extends React.Component {
  gotoPage = (page) => {
    const { goto, onClose } = this.props;
    goto(page);
    onClose();
  };

  render() {
    const {
      classes,
      compose,
      selected,
      intl
    } = this.props;

    return (
      <Fragment>
        <List className={classes.nav}>
          <ListItem button className={selected === 'inbox' ? classes.selected : ''} onClick={() => this.gotoPage('inbox')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={intl.formatMessage(messages.inbox)} />
          </ListItem>
          <ListItem button className={selected === 'stared' ? classes.selected : ''} onClick={() => this.gotoPage('stared')}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={intl.formatMessage(messages.stared)} />
          </ListItem>
        </List>
        <Divider className={classes.divider} />
        <List className={classes.nav}>
          <ListItem button className={selected === 'updates' ? classes.selected : ''} onClick={() => this.gotoPage('updates')}>
            <ListItemIcon>
              <Flag className={classes.iconOrange} />
            </ListItemIcon>
            <ListItemText primary={intl.formatMessage(messages.updates)} />
          </ListItem>
          <ListItem button className={selected === 'promos' ? classes.selected : ''} onClick={() => this.gotoPage('promos')}>
            <ListItemIcon>
              <LabelIcon className={classes.iconBlue} />
            </ListItemIcon>
            <ListItemText primary={intl.formatMessage(messages.promos)} />
          </ListItem>
        </List>
      </Fragment>
    );
  }
}

EmailMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  compose: PropTypes.func.isRequired,
  goto: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  selected: PropTypes.string.isRequired,
  intl: intlShape.isRequired
};

EmailMenu.defaultProps = {
  onClose: () => {}
};

export default withStyles(styles)(injectIntl(EmailMenu));
