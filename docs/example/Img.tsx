import { fetchFile } from '@/z_utils';
import React, { useEffect, useState } from 'react';
import { ImgViewer } from 'react-doc-view';

const Img = () => {
  const [example, setExample] = useState<Blob>();
  useEffect(() => {
    fetchFile('/jpgFile.jpg', setExample);
  }, []);
  return <ImgViewer file={example} />;
};

export default Img;
