// //Bài 1
// let count=1;
// for(count=1;count<=500;count++){
//     console.log(count);
// }

// //Bài 2
// for (let i = 0; i < 300; i++) {
//     if (i % 6 == 0) {
//     console.log(i); 
//     }
// }

// //Bài 3
// let sum=0;
// for(let i=-30;i<=50;i++){
//     if(i % 2 == 0){
//         sum+=i;
//     }

// }
// console.log(sum)

//Bài 4
// let n=prompt("Nhập vào số n: ");
// function tinhGiaithua(n){
//     if(n===0){
//         return 1;
//     }else{
//         return n * tinhGiaithua(n-1);
//     }
// }
// console.log(tinhGiaithua(n));

//Bài 5 
// let a=prompt("Nhập vào số a: ");
// let b=prompt("Nhập vào số b: ");
// let x=prompt("Nhập vào số x: ");
// function timSoNhoNhatChiaHetChoX(a, b, x) {
//     let i = a;
//     while (i <= b) {
//       if (i % x === 0) {
//         return i;
//       }
//       i++;
//     }
//     return -1; // không tìm thấy số nào chia hết cho x trong khoảng a đến b
//   }
//   console.log(timSoNhoNhatChiaHetChoX(a, b, x));

//Bài 7: in ra số ước của n
// let n = prompt("Nhập số n: ")
// function countDivisors(n) {
//     let count = 0;
//     for(let i = 1; i <= n; i++) {
//       if(n % i == 0) {
//         count++;
//       }
//     }
//     return count;
//   }

//   // Sử dụng hàm countDivisors để in ra số lượng ước của một số n bất kỳ
//   let n = 20; // ví dụ: số cần kiểm tra
//   let divisors = countDivisors(n);
//   console.log("Số ước của", n, "là", divisors);

//Bài 8: xd số nguyên tố
// let n = prompt("Nhập vào số n: ")
// function isPrime(n) {
//     if(n < 2) { // nếu số n nhỏ hơn 2 thì không phải là số nguyên tố
//       return false;
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++) { // kiểm tra từ 2 đến căn bậc hai của n
//       if(n % i == 0) { // nếu n chia hết cho i thì không phải là số nguyên tố
//         return false;
//       }
//     }
//     return true; // nếu không có số nào chia hết cho n thì n là số nguyên tố
//   }

//   // Sử dụng hàm isPrime để kiểm tra xem một số n bất kỳ có phải là số nguyên tố hay không
// //   let n = 17; // ví dụ: số cần kiểm tra
//   if(isPrime(n)) {
//     console.log(n, "là số nguyên tố");
//   } else {
//     console.log(n, "không là số nguyên tố");
//   }


//Bài 10
// function findGCD(m, n) {
//     let min = Math.min(m, n);
//     let gcd = 1;
//     for(let i = 1; i <= min; i++) {
//       if(m % i == 0 && n % i == 0) { // nếu i là ước chung của m và n thì cập nhật gcd
//         gcd = i;
//       }
//     }
//     return gcd;
//   }

//   // Sử dụng hàm findGCD để tìm ước chung lớn nhất của hai số m và n
//   let m = 24; // ví dụ: số thứ nhất
//   let n = 36; // ví dụ: số thứ hai
//   let gcd = findGCD(m, n);
//   console.log("Ước chung lớn nhất của", m, "và", n, "là", gcd);

//Bài 13: In bảng cửu chương
// let n = prompt("Nhập vào số n: ")
// function printMultiplicationTable(n) {
//     for(let i = 1; i <= 10; i++) { // in ra bảng cửu chương từ 1 đến 10
//       console.log(n, "x", i, "=", n * i);
//     }
//   }

//   // Sử dụng hàm printMultiplicationTable để in ra bảng cửu chương của số n bất kỳ
//   let n = 7; // ví dụ: số cần in bảng cửu chương
//   console.log("Bảng cửu chương của số", n);
//   printMultiplicationTable(n);

//Bài 14: In hình vuông
// function inHinhVuong(n) {
//     for (let i = 1; i <= n; i++) {
//       let row = '';
//       for (let j = 1; j <= n; j++) {
//         row += '* ';
//       }
//       console.log(row);
//     }
//   }

//   // Ví dụ in ra hình vuông có độ dài cạnh là 4
//   inHinhVuong(4);

//Bài 15: In hình chữ nhật
// function inHinhChuNhat(m, n) {
//     for (let i = 1; i <= n; i++) {
//       let row = '';
//       for (let j = 1; j <= m; j++) {
//         row += '* ';
//       }
//       console.log(row);
//     }
//   }

//   // Ví dụ in ra hình chữ nhật có độ rộng là 4 và chiều cao là 3
//   inHinhChuNhat(4, 3);


//Bài 10: Ước chung lớn nhất
// let m=Number(prompt('Nhập vào số m: '));
// let n= Number(prompt('Nhập vào số n: '));
// let gcd=1;
// for(i=1;i<=m && i <=n;i++){
//     if(m % i ===0 && n % i === 0){
//         gcd=i;
//     }
// }
// console.log(gcd)

//Bài 11: Bội chung nhỏ nhất
// let m = Number(prompt('Nhập vào số m: '));
// let n = Number(prompt('Nhập vào số n: '));
// let gcd = 0;
// let start = m;
// if (n > m) {
//     start = m
// }
// for (i = start; i <= m * n; i++){
//     if(i%m===0&&i%n===0){
//         gcd=i;
//         break
//     }
// }
// console.log(gcd)