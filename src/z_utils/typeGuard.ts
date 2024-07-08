const toString = Object.prototype.toString
const isArrayBuffer = (unKnow:string | ArrayBuffer | null ): unKnow is ArrayBuffer =>{
  return   toString.call(unKnow) === '[object Object]'
}
const isString = (unKnow:string | ArrayBuffer | null ): unKnow is string =>{

  return  toString.call(unKnow)  === '[object String]'
}

export  {isArrayBuffer,isString}
