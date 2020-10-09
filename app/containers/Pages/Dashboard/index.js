import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, CarouselWidget } from 'enl-components';
import Grid from '@material-ui/core/Grid';

//import component
import OverviewDashboard from './Components/OverviewDashboard';
import PenjualanTerakhir from './Components/PenjualanTerakhir';
import ProdukHampirHabis from './Components/ProdukHampirHabis';

class BasicTable extends Component {
  render() {
    const title = brand.name + ' - Dashboard';
    const description = brand.desc;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>

        <OverviewDashboard />

        <PapperBlock title="Penjualan Terakhir" whiteBg icon="local_mall" desc="Ini adalah daftar penjualan terakhir toko kamu.">
          <div>
            <PenjualanTerakhir />
          </div>
        </PapperBlock>

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Produk Hampir Habis" whiteBg icon="assignment_late" desc="Ini adalah daftar produk hampir habis toko kamu.">
              <div>
                <ProdukHampirHabis />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <CarouselWidget />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BasicTable;
