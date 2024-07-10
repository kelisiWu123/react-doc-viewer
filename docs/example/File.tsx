import React from 'react';
import FileViewer from '@/FileViewer';

const File = () => {
  const [file, setFile] = React.useState<Blob>();
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const { target } = e;
          if (target && target.files) {
            const file = target.files[0];
            setFile(file);
          }
        }}
      />
      <FileViewer file={file} />
    </div>
  );
};

export default File;
