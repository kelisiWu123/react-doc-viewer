import DOMPurify from 'dompurify';

import Tabs from '@/components/Tabs';
import { Tab } from 'rc-tabs/lib/interface';
import React, { useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import './index.less';
type XLSXViewerPropsType = {
  file: Blob;
};
const XLSXViewer: React.FC<XLSXViewerPropsType> = ({ file }) => {
  const [html, setHTML] = useState('');
  const workBook = useRef<XLSX.WorkBook>();
  const [tabs, setTabs] = useState<string[]>([]);
  const [actTab, setActTab] = useState<string>();

  useEffect(() => {
    file?.arrayBuffer().then((data) => {
      const wb = XLSX.read(data, { type: 'array' });
      setTabs(wb.SheetNames);
      workBook.current = wb;
      const ws = wb.Sheets[wb.SheetNames[0]];
      setActTab(wb.SheetNames[0]);
      const dangerousHtml = XLSX.utils.sheet_to_json(ws, {});
      console.log(dangerousHtml);
      // const cleanHtml = DOMPurify.sanitize(dangerousHtml);
      // setHTML(cleanHtml);
    });
  }, [file]);

  useEffect(() => {
    if (actTab && workBook.current) {
      const dangerousHtml = XLSX.utils.sheet_to_html(
        workBook.current.Sheets[actTab],
        {},
      );
      const cleanHtml = DOMPurify.sanitize(dangerousHtml);
      setHTML(cleanHtml);
    }
  }, [actTab]);

  return (
    <>
      <Tabs
        more={{ icon: <span>more</span> }}
        onChange={(key) => {
          setActTab(key);
        }}
        items={tabs.map((item): Tab => {
          return { label: item, key: item };
        })}
      />
      <div className={'xlsx'} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default XLSXViewer;
