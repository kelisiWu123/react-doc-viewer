import React, { useEffect, useMemo, useState } from 'react';

import Papa from '../assets/js/papaparse.min';

type CSVViewerPropsType = {
  file?: Blob;
};
const CSVViewer: React.FC<CSVViewerPropsType> = ({ file }) => {
  const [content, setContent] = useState<string[][]>();
  useEffect(() => {
    if (file) {
      Papa.parse(file, {
        delimiter: ',', // 字段分隔符
        complete: (results: { data: string[][] }) => {
          setContent(results.data);
        },
      });
    }
  }, [file]);
  const mockTable = useMemo(() => {
    if (!Array.isArray(content)) return;

    return (
      <table>
        <tbody>
          {content.map((row, index) => {
            console.log();
            return (
              <tr key={index}>
                {row.map((col, index) => {
                  return <td key={index}>{col}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }, [content]);
  return (
    <>
      <div style={{ height: '500px', width: '100%', overflow: 'auto' }}>
        {mockTable}
      </div>
    </>
  );
};

export default CSVViewer;
