// 2.Viết một hàm JavaScript để kiểm tra xem một chuỗi rỗng không.
function Check(m){
    if (m.length === 0) {
    
        return true;
    }
    return false
    }
    console.log(Check(''));
    // true
    console.log(Check('abc'));
    // false