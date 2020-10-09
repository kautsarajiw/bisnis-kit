import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'enl-components/Tables/tableStyle-jss';

let id = 0;
function createData(name, stok, kategori) {
  id += 1;
  return {
    id,
    name,
    stok,
    kategori,
  };
}

const data = [
  createData('Frozen yoghurt', 5, 'Makanan'),
  createData('Ice cream sandwich', 2, 'Makanan'),
  createData('Eclair', 2, 'Makanan'),
  createData('Cupcake', 4, 'Makanan'),
  createData('Gingerbread', 1, 'Makanan'),
];

function ProdukHampirHabis(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.rootTable}>
        <Table className={classNames(classes.table, classes.hover)}>
          <TableHead>
            <TableRow>
              <TableCell>Nama Produk</TableCell>
              <TableCell align="center">Stok Produk</TableCell>
              <TableCell align="center">Kategori Produk</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell align="center">{n.stok}</TableCell>
                <TableCell align="center">{n.kategori}</TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
}

ProdukHampirHabis.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProdukHampirHabis);
