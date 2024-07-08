import React, {useEffect, useRef} from 'react';
import { renderAsync } from 'docx-preview';
const docxOptions = {
  className: 'kaimo-docx-666', // string：默认和文档样式类的类名/前缀
  inWrapper: true, // boolean：启用围绕文档内容的包装器渲染
  ignoreWidth: false, // boolean：禁用页面的渲染宽度
  ignoreHeight: false, // boolean：禁止渲染页面高度
  ignoreFonts: false, // boolean：禁用字体渲染
  breakPages: true, // boolean：在分页符上启用分页
  ignoreLastRenderedPageBreak: true, // boolean：在 lastRenderedPageBreak 元素上禁用分页
  experimental: false, // boolean：启用实验功能（制表符停止计算）
  trimXmlDeclaration: true, // boolean：如果为true，解析前会从​​ xml 文档中移除 xml 声明
  useBase64URL: false, // boolean：如果为true，图片、字体等会转为base 64 URL，否则使用URL.createObjectURL
  useMathMLPolyfill: false, // boolean：包括用于 chrome、edge 等的 MathML polyfill。
  showChanges: false, // boolean：启用文档更改的实验性渲染（插入/删除）
  debug: false, // boolean：启用额外的日志记录
};
type DocxViewerPropsType = {
  file?:Blob
}
const DocxViewer:React.FC<DocxViewerPropsType> = ({file}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    if (file && ref.current){
      renderAsync(file,ref.current,undefined,docxOptions)
    }
  },[file])
  return (
    <div className={'container'} id={'docx-preview'} ref={ref}>
    </div>
  );
};

export default DocxViewer;
