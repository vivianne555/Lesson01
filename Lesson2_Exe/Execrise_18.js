// Viết một hàm JavaScript để chuyển đổi một chuỗi HTML thành một chuỗi đã escape.
// Dữ liệu kiểm tra:
// console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
// // "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"

function escape_HTML(hattml) {
    return hattml.replace(/[&<>"']/g, function(match) {
        switch (match) {
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "'":
                return "&#39;";
            default:
                return match;
        }
    });
}
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
// Kết quả: "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"



