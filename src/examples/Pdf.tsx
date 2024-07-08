import React, { useEffect, useState } from 'react';
import { PDFViewer } from 'react-doc-view';
import { fetchFile } from '@/z_utils';

const Pdf = () => {
  const [e, setE] = useState<Blob>();
  const [current, setCurrent] = React.useState<number>(1);
  useEffect(() => {
    fetchFile('/pdfFile.pdf', setE);
  }, []);
  useEffect(() => {}, [e]);
  return (
    <>
      <button
        type={'button'}
        onClick={() => {
          setCurrent((pre) => pre - 1);
        }}
      >
        pre
      </button>
      <button
        type={'button'}
        onClick={() => {
          setCurrent((pre) => pre + 1);
        }}
      >
        next
      </button>
      <button
        type={'button'}
        onClick={() => {
          setCurrent(1);
        }}
      >
        first page
      </button>
      <PDFViewer
        loading={<span>Loading PDF…</span>}
        error={<span>Failed to load PDF file.</span>}
        nodata={<span>No PDF file specified.</span>}
        file={e}
        current={current}
        onItemClick={({ pageNumber }) => {
          setCurrent(pageNumber);
        }}
      />
    </>
  );
};

export default Pdf;
