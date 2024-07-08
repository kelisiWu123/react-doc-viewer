import React, {cloneElement, ReactElement} from 'react';
type DemoWrapperPropsType = {
  children: ReactElement;
}
const DemoWrapper:React.FC<DemoWrapperPropsType> = ({children}) => {
  const [file, setFile] = React.useState<Blob>()
  const childrenWithProps = cloneElement(children,{file:file,fileName:file?.name})
  return (
    <div>
      <input type="file" onChange={async(e) => {
        const {target } = e
        if (target && target.files){
          const file = target.files[0];
          setFile(file)
        }
      }}/>
      {file ? childrenWithProps : undefined}
    </div>
  );
};

export default DemoWrapper;
