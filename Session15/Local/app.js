// Local Storage: setItem va getItem 
// // Syntax: localStorage.setItem("key", "value")
// // Syntax: localStorage.getItem("key")

// 1. Kieu du liêu nguyen thuy: string, number, boolean, null, undefined, symbol, bigInt
// let fullName = "Nguyen Xuan Bach"
// let age = 18
// localStorage.setItem("fullName", fullName)
// localStorage.setItem("age", age)
// let result = localStorage.getItem("age")
// console.log(typeof(result));

// 2. Kiem du lieu tham chieu: Array, Object (Array-Object)
let books = [
  {
    id: 1,
    bookName: "Toi thay hoa vang tren co xanh",
    year: 1991,
    author: "ShiniKudo",
  },
  { id: 2, bookName: "Toi la Conan", year: 2000, author: "Loan Anh" },
  { id: 3, bookName: "Cha tre cha giau", year: 2005, author: "Xuan Mai" },
];
localStorage.setItem("books", JSON.stringify(books))
// Convert string => array (JSON)
let result = JSON.parse(localStorage.getItem("books"))
console.log(result); // string 
