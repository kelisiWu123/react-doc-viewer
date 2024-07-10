import React, { useEffect, useState } from 'react';
import { XLSXViewer } from 'react-doc-view';
import { fetchFile } from '@/z_utils';

const Xlsx = () => {
  const [example, setExample] = useState<Blob>();
  useEffect(() => {
    fetchFile('/normal.csv', setExample);
  }, []);
  return (
    <div>
      {example ? (
        <div style={{ height: 500, width: '100%', overflow: 'auto' }}>
          <XLSXViewer file={example} />
        </div>
      ) : undefined}
    </div>
  );
};

export default Xlsx;
