import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  DashboardPages,
  SemuaPesanan,
  PesananBaru,
  PesananDiterima,
  PesananTerkirim,
  PesananBerhasil,
  PesananDibatalkan,
  KategoriProduk,
  SemuaProduk,
  HampirHabis,
  HubungiKami,
  BrandAssets,
  InboxPelanggan,
  BlankPage,
  Error,
  NotFound,
  Form,
  Table,
  Parent
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          { /* Home */ }
          <Route exact path="/app" component={DashboardPages} />
          <Route path="/app/pesanan" component={SemuaPesanan} />
          <Route path="/app/pesanan/baru" component={PesananBaru} />
          <Route path="/app/pesanan/diterima" component={PesananDiterima} />
          <Route path="/app/pesanan/terkirim" component={PesananTerkirim} />
          <Route path="/app/pesanan/berhasil" component={PesananBerhasil} />
          <Route path="/app/pesanan/dibatalkan" component={PesananDibatalkan} />
          <Route path="/app/produk/kategori" component={KategoriProduk} />
          <Route path="/app/produk/hampir-habis" component={HampirHabis} />
          <Route path="/app/produk" component={SemuaProduk} />
          <Route path="/app/website/hubungi-kami" component={HubungiKami} />
          <Route path="/app/website/brand-assets" component={BrandAssets} />
          <Route path="/app/inbox" component={InboxPelanggan} />
          <Route path="/app/contoh-dashboard" component={BlankPage} />
          <Route path="/app/form" component={Form} />
          <Route path="/app/table" component={Table} />
          <Route path="/app/page-list" component={Parent} />
          <Route path="/app/pages/not-found" component={NotFound} />
          <Route path="/app/pages/error" component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
