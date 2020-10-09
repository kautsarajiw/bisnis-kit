import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import FilterListOutlined from '@material-ui/icons/FilterListOutlined';
import SortByAlphaOutlined from '@material-ui/icons/SortByAlphaOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import GridOn from '@material-ui/icons/GridOn';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import messages from './messages';
import Cart from '../Product/Cart';
import styles from './search-jss';

class SearchProduct extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {
      classes,
      dataCart,
      removeItem,
      checkout,
      totalItems,
      totalPrice,
      search,
      keyword,
      dataProduct,
      handleSwitchView,
      listView,
      intl
    } = this.props;

    const getTotalResult = dataArray => {
      let totalResult = 0;
      for (let i = 0; i < dataArray.size; i += 1) {
        if (dataArray.getIn([i, 'name']) === undefined) {
          return false;
        }
        if (dataArray.getIn([i, 'name']).toLowerCase().indexOf(keyword) !== -1) {
          totalResult += 1;
        }
      }
      return totalResult;
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar className={classes.searchBar}>
            <div className={classes.flex}>
              <div className={classes.wrapper}>
                <div className={classes.search}>
                  <SearchIcon />
                </div>
                <input className={classes.input} placeholder={intl.formatMessage(messages.placeholder)} onChange={(event) => search(event)} />
              </div>
            </div>
            <div className={classes.cart}>
              <IconButton
                color="inherit"
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <FilterListOutlined />
                </Badge>
              </IconButton>
              <Cart
                anchorEl={anchorEl}
                dataCart={dataCart}
                close={this.handleClose}
                removeItem={removeItem}
                checkout={checkout}
                totalPrice={totalPrice}
              />
            </div>
            <div className={classes.cart}>
              <IconButton
                color="inherit"
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <SortByAlphaOutlined />
                </Badge>
              </IconButton>
              <Cart
                anchorEl={anchorEl}
                dataCart={dataCart}
                close={this.handleClose}
                removeItem={removeItem}
                checkout={checkout}
                totalPrice={totalPrice}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchProduct.propTypes = {
  classes: PropTypes.object.isRequired,
  dataCart: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  keyword: PropTypes.string.isRequired,
  dataProduct: PropTypes.object.isRequired,
  handleSwitchView: PropTypes.func.isRequired,
  listView: PropTypes.string.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(SearchProduct));
