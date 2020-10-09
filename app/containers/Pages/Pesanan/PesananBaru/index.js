import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import component
import Pesanan from '../SemuaPesanan/';

class PesananBaru extends React.Component {
  render() {
    return(
      <div>
        <Pesanan />
      </div>
    );
  }
}

PesananBaru.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(PesananBaru);
