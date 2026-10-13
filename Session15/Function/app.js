// Function (Ham)
// Tu khoa function, parameter (tham so), argument (doi so)

// 1. Khai niem: Ham giam thieu cac tac vu lap di lap lai => code de doc, de bao tri (maintaince)
// 2. Phan loai cac function
// 2.1 Built-in Function (Ham co san JS): alert(), prompt(), push(), pop(),...
// 2.2 Defined Function (Ham tu dinh nghia)
// 8 loai function - 3 loai co ban nhat
// Anonymous Function (Ham vo danh)
// Invoke Function (Ham tu huy)
// Callback Function
// Generator Function (Redux -React)
// Async Function (Ham bat dong bo)
// Constructor Function (MD3- OOP)
// Declaration Function
// // Giai doan khoi tao - dinh nghia ham
// function sayHi() {
//     console.log("Xin chao cac ban lop BrSE250826");
// }
// // Giai doan thuc thi - Goi ham
// sayHi()
// // Expression Function
// let sayHello = function () {
//     console.log("Hello BrSE250826");
// }
// sayHello()
// Arrow Function
// VD tinh tong 2 so
// let sum = function (a,b) {
//     return a +b
// }
// console.log(sum(2,3));

// let sum = (a,b) => a + b
// let sum = (a,b) => {
//    return a+b
// }
// console.log(sum(2,3));

// Tham so va doi so
// Tham so (Parameter): la bien tham gia vao ham trong qua trinh khoi tao
// Doi so (Argument): la gia tri truyen vao ham trong qua trinh thuc thi
// function number(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     return a +b + c
//     console.log(a + b + c);
// }

// number(1,2,3) // 1,2,3,6
// number(1,2) // 1,2,undefined, NaN
// number(1,2,3,4) // 1,2,3,6
// Tu khoa return: giup ham tra ve gia tri, cac cau lenh sau tu khoa return se bi vo hieu

// VD: Viet ham tinh tong cac phan tu trong mang
let arr = [1, 2, 3, 4, 5];
let arr1 = [2, -3, 6, 1, 10, 7];
// B1: Viet logic tinh tong
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//   sum = sum + arr[index];
// }
// console.log(sum);

// B2: Khai bao ham va dua toan bo logic vao trong ham
// function sum() {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum = sum + arr[index];
//   }
//   return sum;
// }
// console.log(sum());

// function sum1() {
//   let sum = 0;
//   for (let index = 0; index < arr1.length; index++) {
//     sum = sum + arr1[index];
//   }
//   return sum;
// }
// console.log(sum1());

// B3: Tim nhung cho thay doi trong mang dua vao param
// function sum(array) {
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     sum = sum + array[index];
//   }
//   return sum;
// }

// console.log(sum(arr));
// console.log(sum(arr1));

// [Bài tập] Hàm kiểm tra đối xứng
// let string = "HELLEH"
// B1: Chuyen doi tu string sang Array (split(), join())
// B2: Dao nguoc mang (reverse())
// B3: Chuyen doi mang dao nguoc thanh reverseString 
// B4: So sanh string va reverseString 


 