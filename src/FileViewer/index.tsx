import DocxViewer from '@/DocxViewer';
import ImgViewer from '@/ImgViewer';
import FlvViewer from '@/VideoViewer';
import XLSXViewer from '@/XLSXViewer';
import { PDFViewer, TxtViewer } from '@/index';
import { getFileExtension } from '@/z_utils';
import React, { FC } from 'react';

// const fileType = [
//   'docx',
//   'xlsx',
//   'xls',
//   'pdf',
//   'csv',
//   'txt',
//   'webm',
//   'mp4',
//   'flv',
//   'png',
//   'jpg',
//   'jpeg',
//   'gif',
//   'svg',
// ];
type FileViewerPropsType = {
  file?: Blob;
};
const FileViewer: FC<FileViewerPropsType> = ({ file }) => {
  if (!file) return null;
  const type = getFileExtension(file.name);
  let element = <></>;

  switch (type) {
    case 'docx':
    case 'docx'.toUpperCase():
      element = <DocxViewer file={file} />;
      break;
    case 'xlsx':
    case 'xlsx'.toUpperCase():
    case 'xls':
    case 'xls'.toUpperCase():
    case 'csv':
    case 'csv'.toUpperCase():
      element = <XLSXViewer file={file} />;
      break;
    case 'pdf':
    case 'pdf'.toUpperCase():
      element = <PDFViewer file={file} />;
      break;
    case 'txt':
    case 'txt'.toUpperCase():
      element = <TxtViewer file={file} />;
      break;
    case 'webm':
    case 'webm'.toUpperCase():
    case 'mp4':
    case 'mp4'.toUpperCase():
    case 'flv':
    case 'flv'.toUpperCase():
      element = <FlvViewer file={file} />;
      break;

    case 'jpg':
    case 'jpg'.toUpperCase():
    case 'jpeg':
    case 'jpeg'.toUpperCase():
    case 'gif':
    case 'gif'.toUpperCase():
    case 'png':
    case 'png'.toUpperCase():
    case 'svg':
    case 'svg'.toUpperCase():
      element = <ImgViewer file={file} />;
      break;
  }
  return element;
};

export default FileViewer;
