import React, { useEffect, useRef } from 'react';
import flv from '../assets/js/flv.min';

type FlvViewerPropsType = {
  file?: Blob;
  width?: number;
  height?: number;
};
const FlvViewer: React.FC<FlvViewerPropsType> = ({
  file,
  height = '100%',
  width = '100%',
}) => {
  const ref = useRef<HTMLMediaElement | null>(null);
  const urlRef = useRef<string>();
  const player = useRef<HTMLVideoElement>();
  useEffect(() => {
    if (file && ref.current) {
      const url = URL.createObjectURL(file);
      const flvPlayer = flv.createPlayer({
        type: file.type,
        url: url,
      });
      // 保留地址
      urlRef.current = url;
      flvPlayer.attachMediaElement(ref.current);
      player.current = flvPlayer;
      player.current?.load();
    }
  }, [file]);

  useEffect(() => {
    return () => {
      // 销毁引用 防止内存泄漏
      if (urlRef && urlRef.current) {
        console.log(urlRef.current);
        URL.revokeObjectURL(urlRef.current);
      }
    };
  }, []);
  return (
    <>
      <video
        height={height}
        width={width}
        controls={true}
        ref={ref as any}
      ></video>
    </>
  );
};

export default FlvViewer;
