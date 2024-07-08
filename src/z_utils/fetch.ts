import { Dispatch, SetStateAction } from 'react';

export const fetchFile = (
  url: string,
  setFile: Dispatch<SetStateAction<Blob | undefined>>,
) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob(); // 将响应体转化为Blob
    })
    .then((blob) => {
      // 成功获取Blob后可以进行进一步处理，比如预览、发送到服务器等
      console.log(blob, 'blo');
      setFile(blob);
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error,
      );
    });
};
