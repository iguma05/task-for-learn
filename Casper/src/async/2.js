// провести review кода

// const updater = async (storage, data) => { /* ... */ }

// const list = [
//     updater1, // 300
//     updater2, // 20
//     ...,
//     updaterN // 50
// ]

// async function doStorageUpdate(storage, data) {
//     // list.forEach(updater => await updater(storage, data));

//     for(const updater of list){
//      // new Promise(res => updater(storage, data));
//      await updater(storage, data);
//     }
// }
//==============================================================
// провести review кода

// const updater = async (storage, data) => { /* ... */ }

// const list = [
//   updater1, // 300
//   updater2, // 20
//   updaterN, // 50
// ];

// async function doStorageUpdate(storage, data) {
//   //     list.forEach(updater => updater(storage, data));
//   for (const item of list) {
//     await item(storage, data);
//   }
// }
