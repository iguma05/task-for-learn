// Как генерировать исключение + как его обработать/перехватить?
// async () =>
// try{
//  await new Promise((res, rej) => {
//    setTimeout(() =>
//      rej('my error')), 0);
//  })
// }catch (e){
//   console.log(e)
// }finally{}

// Promise.resolve().then().catch().finally()
