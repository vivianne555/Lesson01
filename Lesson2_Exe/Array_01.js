// Viết một hàm JavaScript để sao chép một mảng.
// Dữ liệu kiểm tra:
// console.log(array_Clone([1, 2, 4, 0]));
// // Kết quả: [1, 2, 4, 0]
// console.log(array_Clone([1, 2, [4, 0]]));
// // Kết quả: [1, 2, [4, 0]]

function array_Clone(arr) {
    if (!Array.isArray(arr)) {
        return "Vui lòng nhập một mảng.";
    }
    return [...arr];
}
console.log(array_Clone([1, 2, 4, 0]));      // Kết quả: [1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]]));    // Kết quả: [1, 2, [4, 0]]
