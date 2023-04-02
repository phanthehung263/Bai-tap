// // // local Storage

// // // lưu dữ liệu vào local storage
// // localStorage.setItem('name', 'hung phan');
// // localStorage.setItem('address', 'Ha Noi');
// // localStorage.setItem('weight', '65');

// // localStorage.setItem('favorite', ['a', 'b', 'c', 'd'])

// // // lấy dữ liệu từ localStorage
// // // const value = localStorage.getItem('weight');
// // // console.log(value + 10); // kiểu dữ liệu trả về: string hoặc null
// // const favorite = localStorage.getItem('favorite');
// // console.log(favorite);

// const favorite = ['money', 'sleeping', 'girl'];
// let pet = { type: 'cat', name: 'Bob', age: '2'};
// const user = [
//     {id: 1, name: 'A', username: 'user_a', password: '1234'},
//     {id: 2, name: 'B', username: 'user_b', password: '1234'},
// ]

// // biến đổi object | array => string
// const favoriteJSON = JSON.stringify(favorite)
// console.log(favoriteJSON);

// const petJSON = JSON.stringify(pet)
// console.log(petJSON);


// const userJSON = JSON.stringify(user) // biến đổi user thành json
// localStorage.setItem('users', userJSON)
// console.log(userJSON);

// // biến đổi string(json) => object | array

// // const newPet = JSON.parse(petJSON);
// // console.log(newPet);

// const newUser = JSON.parse(userJSON);
// console.log(newUser);

// const $seconds = document.getElementById('seconds');
// const $startTimerBtn = document.getElementById('start-timer-btn');
// const $pauseTimerBtn = document.getElementById('pause-timer-btn');
// const $resetTimerBtn = document.getElementById('reset-timer-timer');

// let timer = null;

// $startTimerBtn.onclick = function () {
//     timer = setInterval(() => {
//         let value = $seconds.innerHTML;
//         value = value - 1;
//         $seconds.innerHTML = value;

//         if (value == 0) {
//             clearInterval(timer);
//         }
//     },1000);
// };

// $resetTimerBtn.onclick = function () {
//     clearInterval(timer);
//     $seconds.innerHTML = 10;
// };

// $pauseTimerBtn.onclick = function () {
//     clearInterval(timer);
// };


// let name = 'Hung Phan';

// let text = `
// Hello
// ${name}
// Goodbye
// `;

// spread
let nums1 = [1, 2, 3, 4];
let nums2 = [8, 9 ,10];

let res1 = [...nums1, 10, 9,...nums1];

let res2 = [...nums1, ...nums2];
console.log(res2);

let part1 = { type: 'Cat', name: 'Bob' };
let part2 = { age: 20};

let summary = { name: 'Peter', ...part1, ...part2, address: 'HN' };
console.log(summary);

// // destructuring 
// let type = summary.type;
// let name = summary.name;
let {type, name} = summary;
console.log(type,name);

let [a,b,c,d]=nums1;
console.log(c,d);


