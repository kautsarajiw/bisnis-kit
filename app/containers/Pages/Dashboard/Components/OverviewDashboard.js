import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//import icons
import AccountBalanceWalletOutlined from '@material-ui/icons/AccountBalanceWalletOutlined';
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined';
import StarHalfTwoTone from '@material-ui/icons/StarHalfTwoTone';
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';

//import component
import { CounterWidget } from 'enl-components';

//import style widget
import styles from 'enl-components/Widget/widget-jss';


class IconInfographic extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootCounterFull} style={{marginBottom:'2%'}}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <CounterWidget
              color="primary-main"
              start={0}
              end={207}
              duration={3}
              title="Total Pendapatan"
            >
              <AccountBalanceWalletOutlined className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={3}>
            <CounterWidget
              color="primary-main"
              start={0}
              end={300}
              duration={3}
              title="Total Produk Terjual"
            >
              <StorefrontOutlined className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={3}>
            <CounterWidget
              color="primary-main"
              start={0}
              end={67}
              duration={3}
              title="Pesanan Baru"
            >
              <ShoppingBasketOutlined className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={3}>
            <CounterWidget
              color="primary-main"
              start={0}
              end={70}
              duration={3}
              title="Ulasan Baru"
            >
              <StarHalfTwoTone className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

IconInfographic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconInfographic);
