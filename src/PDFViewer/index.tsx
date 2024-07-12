import React, { ReactElement } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `/js/pdf.worker.min.mjs`;

type PDFViewerPropsType = {
  file?: Blob;
  width?: number;
  height?: number;
  current?: number;
  loading?: ReactElement;
  nodata?: ReactElement;
  error?: ReactElement;
  onItemClick?: ({ pageNumber }: { pageNumber: number }) => void;
  onDocumentLoadSuccess?: ({ numPages }: { numPages: number }) => void;
};
const PDFViewer: React.FC<PDFViewerPropsType> = (props) => {
  const { file, width, current = 1, height, loading, error, nodata } = props;
  const { onDocumentLoadSuccess, onItemClick } = props;
  return (
    <Document
      file={file}
      onItemClick={onItemClick}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page
        pageNumber={current}
        width={width}
        height={height}
        loading={loading}
        noData={nodata}
        error={error}
      />
    </Document>
  );
};

export default PDFViewer;
