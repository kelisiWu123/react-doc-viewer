import { fetchFile } from '@/z_utils';
import React, { useEffect, useState } from 'react';
import { TxtViewer } from 'react-doc-view';

const Txt = () => {
  const [example, setExample] = useState<Blob>();
  useEffect(() => {
    fetchFile('/txtFile.txt', setExample);
  }, []);
  return <TxtViewer file={example} />;
};

export default Txt;
