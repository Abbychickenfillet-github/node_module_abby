const uniq=require("uniq");
const ary =[1,33,3,3,7,7,9,9,9,9,9,5];
const result=uniq(ary);
console.log(result);
console.log(process.argv[2]);
// 要上傳到github,給別人使用怎麼打包?
// 刻意用了重複的內容
// 看一下node_modules檔案的大小，他是一個怪物會一直長大，有時候index.js是500kb, node_modules可能200-300MG,專案結束後可能會接近G
// 使用一下SASS