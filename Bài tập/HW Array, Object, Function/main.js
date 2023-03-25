const numbers = [1, 2, 3, 4, 5, 6];
// Bài 1: Tính tích các phần tử trong mảng
// let product = 1;
// for (let i = 0; i < numbers.length; i++) {
//     product *= numbers[i];
// }
// console.log(product);

// Bài 2: Tìm số nhỏ nhất mà chia hết cho 2 trong mảng
// function findSmallestEvenNumber(numbers) {
//     let minEven = null;
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//         if (minEven === null || numbers[i] < minEven) {
//           minEven = numbers[i];
//         }
//       }
//     }
//     return minEven;
//   }  
//   let smallestEvenNumber = findSmallestEvenNumber(numbers);
//   console.log(smallestEvenNumber); 

// Bài 3: Tìm số lớn nhất chia hết cho 3 trong mảng
// function findbiggestEvenNumber(numbers){
//     let bigNum = null;
//     for (let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 3 === 0){
//             if(bigNum === null || numbers[i] > bigNum){
//                 bigNum = numbers[i]
//             }
//         }
//     }return bigNum
// }
// let biggestEvennumber = findbiggestEvenNumber(numbers)
// console.log(biggestEvennumber);

// Bài 4: Tính giá trị trung bình của mảng
// let sum = 0;
// for ( let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }
// let Average = 0;
// Average = sum / numbers.length;
// console.log(Average);

// Bài 5: Lọc ra các số nguyên tố trong mảng
// function isPrime(n) {
//     if (n <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   let primeNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (isPrime(numbers[i])) {
//       primeNumbers.push(numbers[i]);
//     }
//   }
//   console.log(primeNumbers);

// Bài 6: Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không?
// function smallerThan10(n) {
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] < 10) {
//             return true;
//         }
//     } return false;
// }
// let SonhoHon10 = smallerThan10(numbers)
// console.log(SonhoHon10)

// Bài 7: Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không
// function AllbiggerThan20(n){
//     for (let i = 0; i < n.length; i++){
//         if(n[i] < 20){
//             return false;
//         }
//     }return true;
// }
// let SolonHon20 = AllbiggerThan20(numbers)
// console.log(SolonHon20)

// Bài 8: Nhập vào số n cho đến khi n là 1 số trong mảng s.
// let n;
// function getInput(s) {
//     while (true) {
//         n = prompt("Nhập số: ");
//         if (s.includes(Number(n))) {
//             return Number(n);
//         }
//     }
// }

// Bài 9: Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.
