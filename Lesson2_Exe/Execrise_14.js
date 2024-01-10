// Viết một hàm JavaScript để định dạng một số thành một chuỗi dễ đọc bởi con người với hậu tố đúng, ví dụ: 1st, 2nd, 3rd, v.v.
// Dữ liệu kiểm tra:
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// ​
// Kết quả:
// "1st"
// "8th"
// "301st"
// "402nd"
function humanize_format(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return "Vui lòng nhập một số.";
    }

    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return number + "th";
    }

    switch (lastDigit) {
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
        default:
            return number + "th";
    }
}

// Dữ liệu kiểm tra
console.log(humanize_format());   // Kết quả: "Vui lòng nhập một số."
console.log(humanize_format(1));  // Kết quả: "1st"
console.log(humanize_format(8));  // Kết quả: "8th"
console.log(humanize_format(301));  // Kết quả: "301st"
console.log(humanize_format(402));  // Kết quả: "402nd"
