// Viết một hàm JavaScript để đếm số lần xuất hiện của một chuỗi con trong một chuỗi.
// Dữ liệu kiểm tra:
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// // 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));
// // 1
function countt(a, b, c = 0, count = 0) {
    const nextc = a.indexOf(b, c);
    if (nextc !== -1) {
      return countt(a, b, nextc + 1, count + 1);
    }
    return count;
}

let a = "There is always have people who are ready to help you";
let b = "is";
let occurrences = countt(a, b);
console.log(occurrences);  // Kết quả: 1