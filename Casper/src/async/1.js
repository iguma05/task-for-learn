/* eslint-disable */
// провести review кода + переписать на ES6

// var fs = require("fs");

// function getFile(path) {
//   var result;
//   fs.readFile(path, function (err, data) {
//     if (err) {
//       throw new Error(err);
//     }
//     result = data;
//   });
//   return result;
// }
//===============================================
// 1-ое решение
// ------------------

// import fs from 'fs';

// function getFile(path) {
//   return new Promise((res, rej)=>{
//     fs.readFile(path, function (err, data) {
//     if (err) {
//       rej(err)
//     }

//     res(data);
//   });
//   }).then(data)
// }

// let a = await getFile()
//====================================================
// 2-ое решение
// ------------------
// import { readFile } from "fs";

// const getFile = async (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(data);
//     });
//   }).then(result);
// };
//==============================================
