import React, { useEffect, useState } from 'react';
import { CSVViewer } from 'react-doc-view';
import { fetchFile } from 'react-doc-view/z_utils';

const Csv = () => {
  const [example, setExample] = useState<Blob>();
  useEffect(() => {
    fetchFile('/normal.csv', setExample);
  }, []);
  return <CSVViewer file={example} />;
};

export default Csv;
