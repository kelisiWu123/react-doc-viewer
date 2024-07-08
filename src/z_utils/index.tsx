import {fetchFile} from './fetch'
import {isArrayBuffer,isString}  from './typeGuard';

function getFileExtension(filename: string): string {
  // 使用lastIndexOf方法找到最后一个'.'的位置，然后使用substring方法提取从该位置到字符串结束的部分
  // 如果没有找到'.'，则返回空字符串表示没有扩展名
  return filename.lastIndexOf('.') >= 0 ? filename.substring(filename.lastIndexOf('.') + 1) : '';
}
export  {fetchFile,isArrayBuffer,isString,getFileExtension}
