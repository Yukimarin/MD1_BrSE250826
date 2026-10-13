// DOM: Document Object Model (Mo hinh tai lieu doi tuong)
// 1. Truy van cac phan tu HTML sang JS (5 cach) - recommend theo ID
// let divE = document.getElementById("container")
// console.log(divE);
// let ulE = document.getElementsByClassName("list-item")
// console.log(ulE);
// let liE = document.getElementsByTagName("li")
// console.log(liE);
// querySelector, querySelectorAll => NodeList

// 2. Content (Noi dung ben trong the) (3 cach)
// console.log(divE.textContent);
// console.log(divE.innerText); //
// console.log(divE.innerHTML); // string
// divE.innerHTML=`<ol class="list-item">
//             <li class="item">Item 4</li>
//             <li class="item">Item 5</li>
//             <li class="item">Item 6</li>
//         </ol>`

// 3. Attribute (Thuoc tinh)
// divE.style.backgroundColor = "red"
// divE.style.display ="none"

// 4. Dom Traversal 
// console.log(divE.parentElement.parentElement);
// console.log(divE.children[0].children[1]);

// 5. Create Element va Them vao cay Dom (appendChild) 
// let li = document.createElement("li")
// // Them class -attribute
// li.setAttribute("class", "item")
// // Them content 
// li.innerText = "Item 4"
// divE.children[0].appendChild(li)


// 6. Event 
// let btnClick = document.getElementById("btn-click")
// // console.log(btnClick);

// // C1: 
// btnClick.onclick = function () {
//     console.log("I luv chiu chiu");
// }
// // C2: 
// btnClick.addEventListener("click", function () {
//     console.log("Bingo!!!!");
// })

// BT1
let pE = document.getElementsByTagName("p")
let btnHide = document.getElementById("btn-hide")
let btnShow = document.getElementById("btn-show")
console.log(pE);
btnHide.addEventListener("click", function () {
    pE[0].style.display = "none"
})

btnShow.addEventListener("click", function () {
    pE[0].style.display = "block"
})