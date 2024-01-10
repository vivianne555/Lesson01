// Viết một hàm JavaScript để chèn một chuỗi vào một chuỗi khác ở một vị trí cụ thể (mặc định là vị trí đầu tiên).
// Ví dụ
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
// ​
// Kết quả:
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."
function insertString(originalString, insertion, index) {
    if (index > originalString.length) {
      return "Vị trí chèn vượt quá độ dài của chuỗi";
    }
  
    return originalString.substring(0, index) + insertion + originalString.substring(index);
  }
  
  // Sử dụng hàm
  let mainString = "Tôi muốn cái bánh";
  let insertedString = "thêm ";
  let result = insertString(mainString, insertedString, 9);
  
  console.log(result);
  