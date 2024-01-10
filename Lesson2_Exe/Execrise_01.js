//1. Viết một hàm JavaScript để kiểm tra xem một 'input' có phải là một chuỗi hay không.
function Kiemtra (s){
    if(typeof(s)=== "string")
    return true;
return false;
}
console.log (Kiemtra("Tuyet"))
console.log (Kiemtra(1))