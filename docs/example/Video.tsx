import React, { useEffect, useState } from 'react';
import { VideoViewer } from 'react-doc-view';
import { fetchFile } from '@/z_utils';

const Video = () => {
  const [example, setExample] = useState<Blob>();
  useEffect(() => {
    fetchFile('/flvFile.flv', setExample);
  }, []);
  return (
    <div>
      <VideoViewer file={example} />
    </div>
  );
};

export default Video;
