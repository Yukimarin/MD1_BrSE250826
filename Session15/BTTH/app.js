// Quan ly sinh vien
// Them sinh vien - C
// Nhap thong tin sinh vien (Ten, Tuoi, Lop) vao cac o input
// An nut them thi thong tin sinh vien se duoc hien thi o bang ben duoi
// Sua sinh vien - U
// Khi bam nut sua se cho phep chinh sua thong tin sinh vien duoc chon
// Xoa sinh vien - D
// Khi bam nut xoa sẽ xoa sinh vien duoc chon

// CRUD => R - C - D - U

// R- HIen thi duoc du lieu
// B1: Tao du lieu mau
let students = [
  { id: 1, fullName: "Thang Tuan Thanh", age: 18, class: "1C" },
  { id: 2, fullName: "Nguyen Thi Huong", age: 40, class: "1B" },
  { id: 3, fullName: "Loan Anh", age: 28, class: "5C" },
];

//  Su dung vong lap for hien thi cac du lieu trong mang
//  Moi lan tao du lieu la tao ra 1 tr (chua du lieu phan tu trong mang)
//  Them tr vao trong tBody
3;
// B2: Truy van thang tBody sang JS
function renderData() {
  let tBody = document.getElementById("table-body");
  console.log(tBody);
  //   L1: tBody = ''
  //   L2: tBody = 3
  //   L3 tBody = 7
  tBody.innerText = "";
  // console.log(tBody);
  students.forEach((student) => {
    // Tao the tr
    let tr = document.createElement("tr");
    // Them du lieu cho tung the tr duoc khoi tao
    tr.innerHTML = `<td>${student.fullName}</td>
            <td>${student.age}</td>
            <td>${student.class}</td>
            <td>
              <div class="action-buttons">
                <button id=${student.id} class="btn-edit">Sửa</button>
                <button id=${student.id} class="btn-delete">Xóa</button>
              </div>
            </td>`;
    // Sau khi them thi dua tr vao trong tBody (them vao cay DOM)
    tBody.appendChild(tr);
    //  L1 tBody = 3
    //  L2 tBody = 3+ 4
    // L3 tBody = 7 + 5 =12
  });
}
renderData();
// B3: C Them moi sinh vien
// User:Nguoi dung nhap ten, tuoi , lop vao input
// Bam vao nut Them sinh vien thong tin moi se hien thi ra man hinh

// Dev: Gan su kien click cho button them sinh vien
// Lay thong tin du lieu nguoi dung vua nhap o cac o input
// Cho thong tin vao mang students

// Truy van va gan su kien click cho nut "THEM SINH VIEN"
let btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", function (e) {
  e.preventDefault(); // Ngan su kien mac dinh cua the form
  // Lay thong tin du lieu nguoi dung vua nhap o cac o input => Truy van cac the input
  let inputName = document.getElementById("name").value;
  let inputAge = document.getElementById("age").value;
  let inputClass = document.getElementById("class").value;
  // console.log(inputAge,inputClass,inputName);
  // Validate du lieu nguoi dung nhap (regex) hoac su dung if else

  // Tao ra bien de luu tru du lieu nguoi dung nhap
  let newStudent = {
    id: Date.now(),
    fullName: inputName,
    age: inputAge,
    class: inputClass,
  };
  // Them doi tuong moi vao mang sach ban dau
  students.push(newStudent);
  //   console.log(students);
  renderData();
  //   1. Lap lai du lieu cu (student du lieu dung => loi thuoc ve renderData)
  //   2. Xoa du lieu nguoi dung nhap trong input
  //    inputName = ''
  //    inputAge = ''
  //    inputClass = ''
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("class").value = "";
});

// B4: Xoa sinh vien
// Bam nut xoa thi mat ten sinh vien duoc chon
// Dev: Lay nut xoa sang js =>
// lam sao biet nut xoa cua sinh vien nao ? =>
// Tu ten Thang Tuan Thanh => id hoac index => xoa du lieu trong mang => render du lieu
let tBody = document.getElementById("table-body");
tBody.addEventListener("click", function (e) {
  // console.log(e.target.classList.contains("btn-delete"));//true or false
  if (e.target.classList.contains("btn-delete")) {
    //    console.log(e.target.id);
    let deleteId = Number(e.target.id);
    for (let i = 0; i < students.length; i++) {
      if (deleteId === students[i].id) {
        students.splice(i, 1);
      }
    }
    console.log(students);
    renderData();
  }
  // Bam nut Sua => Dien lai thong tin thay the thong tin cu => Sau do luu lai
  // Khi an nut Sua thi lay thong tin sinh vien
  // Dua thong tin len input phia tren dong thoi nut Them Sinh vien se bien thanh Luu Thong tin
  // Sau khi an Luu Thong tin capj nhat lai du lieu trong student
  // HIen thi lai du lieu
  if (e.target.classList.contains("btn-edit")) {
    // console.log("Sua sinh vien");
    // Lay thong tin sinh vien khi an nut Sua
    let editId = Number(e.target.id);
    let findStudent = students.find((student) => student.id === editId);
    // console.log(findStudent);

    //  Dua thong tin len input phia tren
    document.getElementById("name").value = findStudent.fullName;
    document.getElementById("age").value = findStudent.age;
    document.getElementById("class").value = findStudent.class;

    // Bien nut Them Sinh vien se bien thanh Luu Thong tin
    // C1:
    document.getElementById("btn-add").style.display = "none";
    document.getElementById("btn-update").style.display = "block";
    // C2:
    // document.getElementById("btn-add").textContent = "Lưu Sinh Viên"
    // document.getElementById("btn-add").style.backgroundColor = "orange"

    // Sau khi an Luu Thong tin cap nhat lai du lieu trong student
    let btnUpdate = document.getElementById("btn-update");
    btnUpdate.addEventListener("click", function (e) {
      e.preventDefault();
      let newName = document.getElementById("name").value;
      let newAge = document.getElementById("age").value;
      let newClass = document.getElementById("class").value;
      //   console.log("Du lieu moi", newAge,newClass,newName);

      //   Cap nhat du lieu moi vao trong student
      findStudent.fullName = newName;
      findStudent.age = Number(newAge);
      findStudent.class = newClass;
      // console.log("Sau khi cap nhat du lieu", students);

      // Hien thi lai du lieu
      renderData();

      // Bien nut Cap nhat ve nut Them Sinh vien
      document.getElementById("btn-add").style.display = "block";
      document.getElementById("btn-update").style.display = "none";
      // Xoa du lieu input
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("class").value = "";
    });
  }
});
