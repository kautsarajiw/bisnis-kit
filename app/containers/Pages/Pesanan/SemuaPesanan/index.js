import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

//import component
import ListPesanan from './Components/ListPesanan';
class SemuaPesanan extends React.Component {
  render() {
    const title = brand.name + ' - Blank Page';
    const description = brand.desc;
    const { intl } = this.props;
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

        <ListPesanan />
      </div>
    );
  }
}

SemuaPesanan.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(SemuaPesanan);
