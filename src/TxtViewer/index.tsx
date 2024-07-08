import React, { useEffect, useState } from 'react';
import { isString } from 'react-doc-view/z_utils';
type TxtViewerPropsType = {
  file?: Blob;
};
const TxtViewer: React.FC<TxtViewerPropsType> = ({ file }) => {
  const [context, setContext] = useState<string>('');
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const { target } = e;
        if (target && isString(target.result)) {
          const txtContent = target.result;
          setContext(txtContent);
        }
      };
      reader.readAsText(file);
    }
  }, [file]);
  return (
    <div>
      <span>{context}</span>
    </div>
  );
};

export default TxtViewer;
