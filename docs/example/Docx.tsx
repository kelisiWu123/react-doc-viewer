import React, {useEffect, useState} from 'react';
import {fetchFile} from "react-doc-view/z_utils";
import {DocxViewer} from "react-doc-view";

const Docx = () => {
  const [example, setExample] = useState<Blob>();
  useEffect(() => {
    fetchFile('/infinity.docx', setExample);
  }, []);
  return (
    <DocxViewer file={example}/>
  );
};

export default Docx;
