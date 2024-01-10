const capitalize_Words = "tôi là tuyết cận";
const words = capitalize_Words.split(' ');

for (let i = 0; i < words.length; i++) {
  // Viết hoa ký tự đầu tiên của từ
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

const capitalizedString = words.join(' ');
console.log(capitalizedString); 