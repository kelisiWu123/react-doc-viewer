import Image from 'rc-image';
import React from 'react';

type ImgViewerPropsType = {
  file?: Blob;
};
const ImgViewer: React.FC<ImgViewerPropsType> = ({ file }) => {
  return (
    <>
      {file ? (
        <Image
          width={300}
          preview={{ mask: 'Click to Preview' }}
          src={URL.createObjectURL(file)}
        ></Image>
      ) : undefined}
    </>
  );
};

export default ImgViewer;
