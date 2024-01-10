// Viết một hàm JavaScript để đặt ký tự đệm (bên trái hoặc phải) cho một chuỗi để có độ dài cụ thể.
// Dữ liệu kiểm tra:
// console.log(formatted_string('0000', 123, 'l'));
// console.log(formatted_string('00000000', 123, ''));
// ​
// Kết quả:

// "0123"
// "12300000"
function formatted(zero, num, letter) {
    if (letter > formatted.length) {
      return "Vị trí chèn vượt quá độ dài của chuỗi";
    }
  
    return formatted.substring(0, letter) + num + letter.substring(index);
  }
  
  let mainString = "Tôi muốn cái bánh";
  let zero = "thêm ";
  let result = letter(mainString, zero, 9);
  
  console.log(result);