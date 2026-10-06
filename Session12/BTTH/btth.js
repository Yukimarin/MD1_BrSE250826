// Viết một chương trình quản lý danh sách sách với các chức năng sau:

// Create
// Thêm sách mới
// Nhập ID, Tên sách, Tác giả, Năm xuất bản.
// Thêm sách vào danh sách.

// Read
// Hiển thị danh sách sách
// Duyệt qua danh sách và in thông tin của từng sách ra màn hình.

// Tim kiem
// Tìm kiếm sách theo tên
// Nhập từ khóa tìm kiếm.
// Tìm và hiển thị sách có tên chứa từ khóa đó (không phân biệt hoa thường).
// Nếu không tìm thấy, thông báo cho người dùng.

// Delete
// Xóa sách theo ID
// Nhập ID của sách cần xóa.
// Nếu sách tồn tại, xóa khỏi danh sách.
// Nếu sách không tồn tại, thông báo lỗi.

// Thoát chương trình
// Dừng chương trình khi người dùng chọn thoát.

// B1: Du lieu mau ban dau
let books = [
  {
    id: 1,
    bookName: "Toi thay hoa vang tren co xanh",
    year: 1991,
    author: "ShiniKudo",
  },
  { id: 2, bookName: "Conan", year: 2000, author: "Loan Anh" },
  { id: 3, bookName: "Cha tre cha giau", year: 2005, author: "Xuan Mai" },
];

// B2: Hien thi menu cho nguoi dung lua chon
console.log("----CHUONG TRINH QUAN LY SACH----");
console.log("1. Them moi sach");
console.log("2. Hien thi danh sach sach");
console.log("3. Tim kiem sach");
console.log("4. Xoa sach");
console.log("5. Thoat chuong trinh");
// B3: Cho nguoi dung nhap lua chon
let choice = Number(prompt("Moi ban nhap lua chon 1-5"));
// B4: Su dung switch case de chia cac chuc nang cho chuong trinh
switch (choice) {
  case 1:
    console.log("1. Them moi sach");
    //Nhap id, ten tac gia, ten sach, nam xuat ban
    let inputID = Date.now();
    let inputBookName = prompt("Moi ban nhap ten sach");
    let inputYear = Number(prompt("Moi ban nhap nam xuat ban"));
    let inputAuthor = prompt("Moi ban nhap ten tac gia");
    // Tao doi tuong moi
    let newBook = {
      id: inputID,
      bookName: inputBookName,
      year: inputYear,
      author: inputAuthor,
    };
    // console.log("Sau khi them du lieu sach moi", newBook);
    // Them doi tuong moi vao mang sach ban dau
    books.push(newBook);
    // console.log("Sau khi them sach moi", books);
    // Hien thi lai toan bo sach dang co trong danh sach
    console.log("======================================");
    console.log("Danh sach sach hien tai trong he thong");
    for (let i = 0; i < books.length; i++) {
      console.log(
        `${i + 1}. ${books[i].bookName} - ${books[i].year} - ${books[i].author}`,
      );
    }
    break;
  case 2:
    console.log("======================================");
    console.log("Danh sach sach hien tai trong he thong");
    for (let i = 0; i < books.length; i++) {
      console.log(
        `${i + 1}. ${books[i].bookName} - ${books[i].year} - ${books[i].author}`,
      );
    }
    // console.log(`${books[0].bookName}- ${books[0].year} - ${books[0].author}`);
    // console.log(`${books[1].bookName}- ${books[1].year} - ${books[1].author}`);
    // console.log(`${books[2].bookName}- ${books[2].year} - ${books[2].author}`);
    break;
  case 3:
    console.log("3. Tim kiem sach");
    break;
  case 4:
    console.log("4. Xoa sach");
    let deleteId = Number(prompt("Nhap id muon xoa"))
    // Xoa sach +> deleteId => index => splice 
    // for (let i = 0; i < books.length; i++) {
    //     if(deleteId === books[i].id){
    //         console.log(i);
    //         books.splice(i,1)
    //         break;
    //     }
    // }
    // console.log(books);

    let findIndex = -1 
    for (let i = 0; i < books.length; i++) {
       if(deleteId === books[i].id){
        findIndex=i;
        break;
       }
    }

    books.splice(findIndex,1)
    // Hien thi lai sach tren he thong 
    console.log("======================================");
    console.log("Danh sach sach hien tai trong he thong");
    for (let i = 0; i < books.length; i++) {
      console.log(
        `${i + 1}. ${books[i].bookName} - ${books[i].year} - ${books[i].author}`,
      );
    }
    break;
  case 5:
    console.log("5. Thoat chuong trinh");
    break;
  default:
    console.log("Lua chon cua ban khong hop le");
    break;
}
