// Array: shift(), unshift, pop, push, , splice, include, join, , indexOf, for of, for in, for loop, map()
// length index element
// JS: kieu du lieu nguyen thuy(7) va kieu du lieu tham chieu (Array, Object)

// let student1 = "Tho"
// let student2 = "Quy"
// console.log(student1, student2);

// let numbers = [1,2,3,4]
// let seasons = ["Mua xuan", "Mua he", "Mua thu"]
// let mixed = ["1", 100, null, undefined, true, [1,2,3]]
// console.log(numbers, seasons, mixed);
// Mang la danh sach chua cac phan tu co tinh chat tuong dong nhau
// Mang numbers:  1    2    3     4
// Index       :  0    1    2     3 (length-1)
// Length = so luong phan tu trong mang = 4
// Element = phan tu ben trong mang

// CRUD
// let numbers = [1,2,3,4]
// R- Read (Doc hien thi du lieu)
// Read one
// console.log("array[index]", numbers[-1]); // undefined
// console.log("array[index]", numbers[0]); // 1
// console.log("array[index]", numbers[1]); // 2
// console.log("array[index]", numbers[2]); // 3
// console.log("array[index]", numbers[3]); // 4
// console.log("array[index]", numbers[4]); // undefined
// Read all
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// for (const key in numbers) {
//     console.log(numbers[key]);
// }

// for (const element of numbers) {
//     console.log(element);
// }

// let numbers = [1,2,3,4]
// // C- Create (Khoi tao them du lieu)
// // TH1: Them vao dau mang
// numbers.unshift(-100)
// console.log("Them vao dau mang", numbers);
// // TH2: Them vao cuoi mang
// numbers.push(100)
// console.log("Them vao cuoi mang", numbers);
// numbers[numbers.length] = 15
// console.log(numbers);
// // TH3: Them vao vi tri bat ky (splice)
// // numbers.splice(vi tri index muon thay doi, so luong phan tu muon xoa(0), phan tu muon them vao)
// numbers.splice(3,0,4000)
// console.log(numbers);

// // D- Delete (Xoa du lieu)
// // TH1: Xoa dau mang
// numbers.shift()
// console.log("Xoa vi tri dau mang voi shift", numbers);
// // TH2: Xoa cuoi mang
// numbers.pop()
// console.log("Xoa vi tri dau mang voi pop", numbers);
// // TH3: Xoa vi tri bat ky (splice)
// // numbers.splice(vitri index muon xoa, so luong phan tu muon xoa)
// // numbers.splice(2,2)
// // console.log(numbers);

// // U- Update (Cap nhat, sua du lieu)
// numbers[3] = 50
// console.log(numbers);
// // numbers.splice(vi tri index muon thay doi, so luong phan tu muon xoa, phan tu muon them vao)
// numbers.splice(2,1,30)
// console.log(numbers);

// Bài toán khai báo mảng số nguyên có sẵn các phần tử từ 10 đến 20 phần tử,
// thực hiện nhập vào một số nguyên để kiểm tra (k),
// thực hiện đếm số lần xuất hiện của k trong mảng. và hiển thị ra màn hình

// Input: Mang rong (10<length<20, element khong co), so ma nguoi dung nhap vao
// Process:
// B1: Khai bao mang rong
let numbers = [];
// B2: Xac dinh length (10-20)
let numbersLength = Math.floor(Math.random() * 11) + 10; // 0 -0.9999..99 *10 = 0 - 9,99999 +10
// console.log(numbersLength);
// B3: Them ngau nhien cac phan tu vao trong mang
for (let index = 0; index < numbersLength; index++) {
  let randomNumber = Math.floor(Math.random() * 10);
  numbers.push(randomNumber);
}
console.log(numbers);
// B4: Cho nguoi dung nhap vao 1 so nguyen bat ky
let inputValue = Number(prompt("Nhap vao so nguyen bat ky"));
// B5: Khai bao bien dem count = 0
// debugger
let count = 0;
// B6: Duyet qua tung phan tu cua mang vong lap for
for (let index = 0; index < numbers.length; index++) {
  // B6.1: Neu nhu so nguyen nguoi dung nhap == gia tri phan tu trong mang => count+1
  if (inputValue === numbers[index]) {
    count = count + 1;
  }
}
// B7: Ra ngoai vong lap for, su dung menh de if
if (count == 0) {
  // B7.1: Neu nhu count = 0 thi hien thi la khong tim thay gia tri nguoi dung nhap
  console.log("So ban nhap khong xuat hien trong mang");
} else {
  // B7.2: Neu nhu count = ? thi hien thi so lan xuat hien cua phan tu do
  console.log(`So ${inputValue} vua nhap xuat hien ${count} lan`);
}

// Output: Dem so lan xuat hien cua so do trong mang
