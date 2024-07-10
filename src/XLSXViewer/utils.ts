const isArrayBuffer = (unKnow:string | ArrayBuffer | null ): unKnow is ArrayBuffer =>{
  return  typeof unKnow === 'object'
}
const getFileExtension = (filename: string): string => {
  // 首先验证输入是否为字符串且非空
  if (filename.length === 0) {
    throw new Error('Filename must be a non-empty string.');
  }
  // 使用正则表达式找到最后一个点号以及之后的部分，即扩展名
  const extensionMatch = filename.match(/\.([^.]+)$/);
  // 如果没有匹配到扩展名，返回空字符串
  if (!extensionMatch) {
    return '';
  }
  // 返回匹配到的扩展名，注意要去掉匹配数组中的索引0，它是整个匹配的字符串
  return extensionMatch[1];
}
export {isArrayBuffer,getFileExtension}
