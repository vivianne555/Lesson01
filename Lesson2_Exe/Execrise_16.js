// Viết một hàm JavaScript để chia một chuỗi thành các phần nhỏ có độ dài cụ thể.
// Dữ liệu kiểm tra:
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource', 2));
// console.log(string_chop('w3resource', 3));
// ​
// Kết quả:
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]
// const string_chop = "Tuyet Nguyen đã thấy và đánh giá";
// const testing = string_chop.split("");
// console.log(testing);
function splitStringByLength(a, b) {
    const regex = new RegExp(`.{1,${chunkLength}}`, 'g');
    return a.match(regex) || [];
  }
  let inputString = "w3resource";
//   let chunkLength = 5;
//   let result = splitStringByLength(inputString, chunkLength);
  let result = inputString.slice(index * chunkLength, (index + 1) * chunkLength)
  console.log(result);
  