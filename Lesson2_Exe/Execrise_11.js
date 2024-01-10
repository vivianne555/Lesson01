// Viết một hàm JavaScript để chuyển đổi một chuỗi Camel Case thành dạng viết thường, mỗi từ cách nhau bởi dấu cách.
// Dữ liệu kiểm tra:
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld', '-'));
// console.log(uncamelize('helloWorld', '_'));
// Kết quả:
// "hello world"
// "hello-world"
// "hello_world"
function camelCaseToLowerCaseWithSpace(inputString) {
    return inputString.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  }
  function camelCaseToLowerCaseWith_(inputString) {
    return inputString.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  } 
  function camelCaseToLowerCaseWithoutSpace(inputString) {
    return inputString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  // Sử dụng hàm /g là tìm kiếm all khoảng cách
  let camelCaseString = "camelCaseExample";
  let resultString = camelCaseToLowerCaseWithSpace(camelCaseString);
  console.log(resultString);  // Kết quả: "camel case example"
 resultString = camelCaseToLowerCaseWith_(camelCaseString);
  console.log(resultString);  // Kết quả: "camel case example"
  resultString = camelCaseToLowerCaseWithoutSpace(camelCaseString);
  console.log(resultString);  // Kết quả: "camel case example"

  