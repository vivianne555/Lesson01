// Viết một hàm JavaScript để ẩn địa chỉ email để ngăn truy cập trái phép.
const hiddenEmail = "tuyetnguyen0501@gmail.com";
//hiddenEmail.substring (3,14);
hiddenEmail.substring (0,2);
hiddenEmail.substring (15,25);
//console.log (hiddenEmail.substring (3,10));
//const hiddenEmail1= "hiddenEmail.substring (3,14)"
//const hiddenCutEmail = hiddenEmail.substring (3,10);
const hiddenCutEmail01 = hiddenEmail.substring(0,2) + "***" + hiddenEmail.substring(15,25);
console.log(hiddenCutEmail01);
// cach 2:
// const hiddenEmail = "tuyetnguyen0501@gmail.com";
// hiddenEmail.replace ("etnguyen0501","***");
// console.log(hiddenEmail.replace ("etnguyen0501","***"))