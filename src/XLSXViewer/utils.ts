import * as XLSX from "xlsx";

const isArrayBuffer = (unKnow:string | ArrayBuffer | null ): unKnow is ArrayBuffer =>{
  return  typeof unKnow === 'object'
}
const parse = (file: Blob)=> {
  return new Promise<any[]>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>) {
      try {
        const {target}  = e
        if (target && isArrayBuffer(target.result)){
          const data = new Uint8Array(target.result);
          const workbook = XLSX.read(data, { type: 'binary' });


        }
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => {

    };
    reader.readAsArrayBuffer(file);
  });
}

const parseJson = async (file: Blob, callback: (row: any, index: number) => any) => {
  try {
    if (!file) {
      throw new Error('请选择要上传的文件');
    }
    const json = (await parse(file));
    return json.map(callback);
  } catch (error: any) {
  }
}

export {parseJson}
