// Viết một hàm JavaScript để cắt chuỗi nếu nó dài hơn một số ký tự cụ thể. Chuỗi đã cắt sẽ kết thúc bằng chuỗi "..." (mặc định) hoặc chuỗi được chỉ định.
// Dữ liệu kiểm tra:
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.', 19))
// console.log(text_truncate('We are doing JS string exercises.', 15, '!!'))
// ​
// Kết quả:
// arduinoCopy code
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"
const text_truncate = "We are doing JS string exercises.";
text_truncate.substring (0,2);
text_truncate.substring (15,25);
const text_truncate01 = text_truncate.substring(0,2) + "...";
console.log(text_truncate01);