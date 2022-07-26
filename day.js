const dayjs = require('dayjs');

const d = dayjs().format();

const date = new Date();

    let data = date.getUTCDate() +'/'+ `0${date < 10 ? date.getMonth()+1: date.getMonth()+1}`+'/'+ date.getFullYear()

console.log(data);