import React, { useEffect, useState } from 'react';
import { VideoViewer } from '../../src';
import { fetchFile } from '../../src/z_utils';

const Video = () => {
  const [example, setExample] = useState<Blob>();
  useEffect(() => {
    fetchFile('/mp3file.mp3', setExample);
  }, []);
  return (
    <div>
      <VideoViewer file={example} />
    </div>
  );
};

export default Video;
