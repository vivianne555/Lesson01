// Viết một hàm JavaScript để lặp lại một chuỗi cho đến một số lần cụ thể.
// Dữ liệu kiểm tra:
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// ​
// Kết quả:
// "aaaa"
// "Error in string or count."
function repeat_string(str, n) {
    if (typeof str !== 'string' || typeof n !== 'number' || n < 0) {
        return "Error in string or count";
    }
    return str.repeat(n);
}
console.log(repeat_string('a', 4));  // Kết quả: "aaaa"
console.log(repeat_string('a'));      // Kết quả: "Error in string or count"
