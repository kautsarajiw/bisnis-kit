import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CreateOutlined from '@material-ui/icons/CreateOutlined';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Fab from '@material-ui/core/Fab';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import styles from 'enl-components/CardPaper/cardStyle-jss';

class ProductCard extends React.Component {
  render() {
    const {
      classes,
      discount,
      soldout,
      thumbnail,
      name,
      desc,
      price,
      prevPrice,
      list,
      detailOpen,
      addToCart,
      width,
      intl
    } = this.props;
    return (
      <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
        <CardMedia
          className={classes.mediaProduct}
          image={thumbnail}
          title={name}
        />
        <CardContent className={classes.floatingButtonWrap}>
          {!soldout && (
            <>
              <Tooltip title={'Hapus Kategori'} placement="top">
                <Fab onClick={addToCart} size="small" color="secondary" aria-label="add" className={classes.buttonAdd} style={{backgroundColor:'#e74c3c'}}>
                  <DeleteOutline />
                </Fab>
              </Tooltip>

              <Tooltip title={'Sunting Kategori'} placement="top">
                <Fab onClick={addToCart} size="small" color="primary" aria-label="add" className={classes.buttonAdd} style={{marginRight:50, backgroundColor:'#34495e'}}>
                  <CreateOutlined />
                </Fab>
              </Tooltip>
            </>
          )}
          
          <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
            {name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  discount: PropTypes.string,
  width: PropTypes.string.isRequired,
  soldout: PropTypes.bool,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  prevPrice: PropTypes.number,
  list: PropTypes.bool,
  detailOpen: PropTypes.func,
  addToCart: PropTypes.func,
  intl: intlShape.isRequired
};

ProductCard.defaultProps = {
  discount: '',
  soldout: false,
  prevPrice: 0,
  list: false,
  detailOpen: () => (false),
  addToCart: () => (false),
};

const ProductCardResponsive = withWidth()(ProductCard);
export default withStyles(styles)(injectIntl(ProductCardResponsive));
