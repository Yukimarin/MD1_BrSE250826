// console, prompt, string, alert, number, for, do while,
// if.. else, switch case, while, let, var, const, break, continue
// boolean, && ,||, string method(trim(), slice(), indexOf, ...)

// 1.Bien
// Syntax: var/let/const + variableName = value
// let nonValue
// let value = 5
// console.log(nonValue); //undefined
// console.log(value); // 5

// var co the khai bao lai, gan lai gia tri moi
// var a =>co che hoisting: Dua moi khai bao len tren cung
// console.log(a); // undefined
// var a = 5
// var a = 10
// a = 20
// console.log(a); // 20

// let khong the khai bao lai, co the gan lai gia tri
// // console.log(b); // error
// debugger
// let b = 5
// b = 20
// console.log(b); // 20

// const khong the khai bao lai, khong the gan lai gia tri moi
// // console.log(c);// error
// const c = 5
// // c = 20
// console.log(c);// 5

// Dat ten bien: tieng Anh co nghia, khong bat dau ky tu so, camelCase
// snake_case
// kebap-case
// console.log(firstNumber);// undefine => var / error => let
// firstNumber = 10 // JS quy dinh tu khoa khai bao la let
// firstNumber = 5
// console.log(firstNumber); // khong la const

// 2.Kieu du lieu
// 2.1 Kieu du lieu nguyen thuy (primative): 7 kieu du lieu
// string, number, null, undefined, boolean, symbol, bigInt
// let a = null
// console.log(a);
// 2.2 Kieu du lieu phuc tap, tham chieu (reference): Array, Object

// 3.Nhap va xuat du lieu (Input va Output)
// Vi du: Ep kieu du lieu string sang number
// let inputValue = Number(prompt("Moi ban nhap so nguyen bat ky"))
// // let inputValue = +prompt("Moi ban nhap so nguyen bat ky")
// // let inputValue = parseInt(prompt("Moi ban nhap so nguyen bat ky"))
// // alert(inputValue)
// console.log(typeof(inputValue));
// console.log(inputValue);

// let lastName = "Nguyen"
// let middleName = "Xuan"
// let firstName = "Bach"
// let age = 18
// Output: Xin chao toi la Nguyen Xuan Bach. Nam nay toi 18 tuoi
// console.log("Xin chao toi la " + lastName +" " +middleName + firstName + ". Nam nay toi" + age + "tuoi");
// ES6: Template String (Template Literal)
// console.log(`Xin chao toi la ${lastName} ${middleName} ${firstName}. Nam nay toi ${age} tuoi`);

// 4.Toan tu
// 4.1 Toan tu so hoc (+,-,*,:,luy thua, can bac 2,....)
// let a = 11
// let b = "2"
// console.log(a+b);//112 (number +string = string + string)
// console.log(a-b);// 9  (number - string = number - number)
// console.log(a*b);// 22
// console.log(a/b);// 5.5
// console.log(a%b);// 1

// 4.1 Toan tu so sanh (>,<, >=,<=, ==,===, !=, !==)
// let a = 5
// let b = "5"
// console.log("so sanh 2 dau =", a == b); // true
// console.log("so sanh 3 dau =", a === b); // false

//4.2 Toan tu logic (&&, ||)
// console.log("Toan tu &&", 5>3 && 3<1); // true && false => false
// console.log("Toan tu ||", 5>3 || 3<1); // true || false => true

// 5.Cac cau lenh dieu khien (Boolean=> menh de dieu kien re nhanh)
// 5.1 Menh de dieu kien if else
// debugger
// let number = 0;
// // Syntax: if (condition){
// //      expression
// // }
// if (number%2===0){
//     // console.log("kiem tra");
//     console.log(`${number} la so chan`);
// }else{
//     console.log(`${number} la so le`);
// }
// console.log("Dong code tiep theo ngoai if");

// if(condition){
//     expression 1
// }else if(condition2){
//     expression 2
// }else{
//     expression 3
// }
// Xet tu dieu kien co pham vi rong truoc, roi moi den pham vi hep
// Cho nguoi dung nhap vao 1 gia tri bat ky. Neu do la so chan thi in ra chan, neu le in ra la so le
// Kiem tra gia tri nguoi dung nhap vao la so hay khong phai so isNaN
// Neu nhu la so thi minh moi kiem tra la so nguyen hay khong phai so nguyen Number.isInteger
// Neu la so nguyen thi kiem tra chan hay le

// Tenary Operator (Toan tu 3 ngoi)
// Syntax: condition ? expression1 : expression 2
// number%2===0 ? console.log(`${number} la so chan`) : console.log(`${number} la so le`)
// Nested if

// 5.2 Menh de dieu kien switch case
// let month = 2;
// // Khi nao dung switch case  va khi nao dung if else
// // Neu bo break trong switch thi sao
// // Case default trong switch tuong duong voi else trong if,
// // Vay dua default len tren cung thi co van de gi khong
// // debugger
// switch (month) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Day la mua xuan");
//     break;
//   case 4:
//     console.log("Day la mua he");
//     break;
//   case 5:
//     console.log("Day la mua he");
//     break;
//   case 6:
//     console.log("Day la mua he");
//     break;
//   default:
//     break;
// }

// 5.3 Vong lap for
// console.log(0);
// console.log(1);
// console.log(2);
// debugger
// for (let i = 0; i < 10 ; i=i+1) {
//     if(i>4){
//         continue
//     }
//     console.log(i);
// }
// console.log("Ngoai vong lap for");

// Vong lap vo han
// for (;;) {
//     console.log("1");
// }

// 5.4 Vong lap while, do...while
// Cho so ngau nhien number (0-100)
// Viet chuong trinh cho nguoi dung doan so
// Neu so do lon hon number => in ra so lon hon
// Neu so do lon hon number => in ra nho hon
// Neu so do bang so number => Bingo

let number = Math.floor(Math.random() * 100); // 0-0.9999...999
// console.log(number);

let check = true
while (check) {
  let inputValue = Number(prompt("Moi ban nhap so nguyen bat ky"));
  if (inputValue > number) {
    console.log("So ban du doan lon hon number");
  } else if (inputValue < number) {
    console.log("So ban du doan nho hon number");
  } else {
    console.log("BINGOOOO");
    check = false
  }
}

// 5.5 Cau lenh break va continue
