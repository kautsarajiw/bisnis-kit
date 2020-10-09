import React, { Fragment } from 'react';
import { MaterialDropZone } from 'enl-components';

class UploadInputImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  render() {
    const { files } = this.state;
    return (
      <Fragment>
        <div>
          <MaterialDropZone
            acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
            files={files}
            showPreviews
            maxSize={5000000}
            filesLimit={5}
            text="Tarik dan lepas gambar di sini atau klik kolom untuk memilih gambar"
          />
        </div>
      </Fragment>
    );
  }
}

export default UploadInputImg;
