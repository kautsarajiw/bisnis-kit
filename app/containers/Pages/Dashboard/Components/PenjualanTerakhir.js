// import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import classNames from 'classnames';
// import Typography from '@material-ui/core/Typography';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import styles from 'enl-components/Tables/tableStyle-jss';

// let id = 0;
// function createData(name, hargaProduk, jumlahPembelian, tanggalPembelian) {
//   id += 1;
//   return {
//     id,
//     name,
//     hargaProduk,
//     jumlahPembelian,
//     tanggalPembelian,
//   };
// }

// const data = [
//   createData('Frozen yoghurt', '5000', 5, '22 Agustus 2020'),
//   createData('Ice cream sandwich', '15.000', 2, '22 Agustus 2020'),
//   createData('Eclair', '25.000', 2, '22 Agustus 2020'),
//   createData('Cupcake', '55.000', 4, '22 Agustus 2020'),
//   createData('Gingerbread', '555.000', 1, '22 Agustus 2020'),
// ];

// function PenjualanTerakhir(props) {
//   const { classes } = props;
//   return (
//     <Fragment>
//       <div className={classes.rootTable}>
//         <Table className={classNames(classes.table, classes.hover)}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Nama Produk</TableCell>
//               <TableCell align="center">Jumlah Pembelian</TableCell>
//               <TableCell align="center">Harga Produk</TableCell>
//               <TableCell align="center">Tanggal Pembelian</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map(n => ([
//               <TableRow key={n.id}>
//                 <TableCell>{n.name}</TableCell>
//                 <TableCell align="center">{n.jumlahPembelian}</TableCell>
//                 <TableCell align="center">{n.hargaProduk}</TableCell>
//                 <TableCell align="center">{n.tanggalPembelian}</TableCell>
//               </TableRow>
//             ]))}
//           </TableBody>
//         </Table>
//       </div>
//     </Fragment>
//   );
// }

// PenjualanTerakhir.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(PenjualanTerakhir);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import messageStyles from 'enl-styles/Messages.scss';
import progressStyles from 'enl-styles/Progress.scss';
import imgApi from 'enl-api/images/photos';
import { injectIntl, intlShape } from 'react-intl';
import avatarApi from 'enl-api/images/avatars';
import messages from 'enl-components/Widget/messages';
import PapperBlock from 'enl-components/PapperBlock/PapperBlock';
import styles from 'enl-components/Widget/widget-jss';

function createData(id, name, date, total, avatar, buyerName, photo, type, currentStock, totalStock, status, statusMessage) {
  return {
    id,
    name,
    date,
    total,
    avatar,
    buyerName,
    photo,
    type,
    currentStock,
    totalStock,
    status,
    statusMessage,
  };
}

const data = [
  createData('QWE123', 'Woman Bag', '23 Oct 2018', 300, avatarApi[6], 'John Doe', imgApi[21], 'blur_on', 14, 30, 'Error', 'Dibatalkan'),
  createData('ABC890', 'Laptop', '11 Nov 2018', 230, avatarApi[8], 'Jim Doe', imgApi[29], 'computer', 25, 70, 'Success', 'Berhasil'),
  createData('GHI556', 'Pinapple Jam', '5 Nov 2018', 34, avatarApi[2], 'Jane Doe', imgApi[25], 'restaurant_menu', 35, 50, 'Warning', 'Menunggu'),
  createData('MNO444', 'Action Figure', '22 Sept 2018', 17, avatarApi[9], 'Jack Doe', imgApi[30], 'toys', 9, 85, 'Info', 'Dibayar'),
  createData('JKL345', 'Man Shoes', '19 Sept 2018', 208, avatarApi[5], 'Jessica Doe', imgApi[22], 'blur_on', 18, 33, 'Default', 'Terkirim'),
];

function TableWidget(props) {
  const { classes, intl } = props;
  const getStatus = status => {
    switch (status) {
      case 'Error': return messageStyles.bgError;
      case 'Warning': return messageStyles.bgWarning;
      case 'Info': return messageStyles.bgInfo;
      case 'Success': return messageStyles.bgSuccess;
      default: return messageStyles.bgDefault;
    }
  };
  const getProgress = status => {
    switch (status) {
      case 'Error': return progressStyles.bgError;
      case 'Warning': return progressStyles.bgWarning;
      case 'Info': return progressStyles.bgInfo;
      case 'Success': return progressStyles.bgSuccess;
      default: return progressStyles.bgDefault;
    }
  };
  return (
      <div className={classes.root}>
        <Table className={classNames(classes.tableLong, classes.stripped)}>
          <TableHead>
            <TableRow>
              <TableCell>Nama Produk</TableCell>
              <TableCell>Pembeli</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Stok</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell>
                  <div className={classes.flex}>
                    <Avatar alt={n.name} src={n.photo} className={classes.productPhoto} />
                    <div>
                      <Typography variant="caption">{n.id}</Typography>
                      <Typography variant="subtitle1">{n.name}</Typography>
                      <a href="/app/pages/invoice" className={classes.downloadInvoice}>
                        <ArrowDownward />
                        &nbsp;INVOICE_
                        {n.id}
                      </a>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={classes.flex}>
                    <Avatar alt={n.buyerName} src={n.avatar} className={classNames(classes.avatar, classes.sm)} />
                    <div>
                      <Typography>{n.buyerName}</Typography>
                      <Typography variant="caption">
                        Tanggal Pembelian:&nbsp;
                        {n.date}
                      </Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="button">
                    $
                    {n.total}
                    ,00
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip label={n.statusMessage} className={classNames(classes.chip, getStatus(n.status))} />
                </TableCell>
                <TableCell align="center">
                  <div className={classes.taskStatus}>
                    <Typography variant="caption">
                      {n.currentStock}
                      &nbsp;/&nbsp;
                      {n.totalStock}
                    </Typography>
                  </div>
                  <LinearProgress variant="determinate" className={getProgress(n.status)} value={(n.currentStock / n.totalStock) * 100} />
                </TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
  );
}

TableWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(TableWidget));
