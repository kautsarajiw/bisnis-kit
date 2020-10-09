import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import UploadInputBtn from './Components/UploadInputImg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class Upload extends React.Component {
  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const docSrc = 'containers/Forms/demos/';
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

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <PapperBlock
              title={'Logo Website'}
              icon="cloud_upload"
              whiteBg
              desc={`Silakan masukan logo website kamu, Logo kamu akan otomatis tampil pada bagian navbar website kamu jika kamu sudah mengunggah logo kamu pada kolom ini.`}
            > 
              <div>
                <UploadInputBtn />
                  <i>Rekomendasi Resolusi 366 x 87 (px)</i><br/><br/>
                <Button variant="contained" color="secondary" style={{marginRight:10, backgroundColor:'#e74c3c'}}>
                  <DeleteIcon />
                </Button>
                <Button variant="contained" color="primary">
                  Simpan
                </Button>
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock
              title={'Logo Favicon'}
              icon="cloud_upload"
              whiteBg
              desc={'Silakan masukan logo favicon kamu, Logo kamu akan otomatis tampil pada bagian tab bar browser jika kamu sudah mengunggah logo kamu pada kolom ini.'}
            >
              <div>
                <UploadInputBtn />
                <i>Rekomendasi Resolusi 16 x 16 (px) </i><br/><br/>
                <Button variant="contained" color="secondary" style={{marginRight:10, backgroundColor:'#e74c3c'}}>
                  <DeleteIcon />
                </Button>
                <Button variant="contained" color="primary">
                  Simpan
                </Button>
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Upload.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Upload);
