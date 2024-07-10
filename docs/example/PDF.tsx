import React, {useEffect, useState} from 'react';
import {fetchFile} from "@/z_utils";
import { PDFViewer } from 'react-doc-view';

const PDF = () => {
  const [example, setExample] = useState<Blob>();
  useEffect(() => {
    fetchFile('/pdfFile.pdf', setExample);
  }, []);
  return <PDFViewer file={example} />;
};

export default PDF;
