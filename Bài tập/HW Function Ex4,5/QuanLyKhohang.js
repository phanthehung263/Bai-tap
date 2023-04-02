// 5 
// let store = {
//   name: "Kho hàng Vinmart",
//   address: "66B Nguyen Sy Sach, phuong 15, quan Tan Binh",
//   owner: "Truong con Nam Dinh",
//   items: [
//     { id: 1, name: "Chocopie", category: "Brown", price: 20 },
//     { id: 2, name: "Oreo", category: "Black", price: 30 },
//     { id: 3, name: "Snack", category: "Yellow", price: 10 },
//     { id: 4, name: "Candy", category: "Orange", price: 40 },
//     { id: 5, name: "Fruit", category: "Colorful", price: 60 },
//     { id: 6, name: "PineApple", category: "Light-yellow", price: 50 },
//     { id: 7, name: "Meat", category: "Red", price: 70 },
//   ]
// };

// function updateStoreInfo() {
//   console.log("Nhập lại thông tin kho hàng:");
//   store.name = prompt("Tên kho hàng:", store.name);
//   store.address = prompt("Địa chỉ kho hàng:", store.address);
//   store.owner = prompt("Người sở hữu kho hàng:", store.owner);
//   console.log("Thông tin kho hàng đã được cập nhật:");
//   console.log(store);
// }

// function addNewItem() {
//   let newItem = {};
//   newItem.id = prompt("Nhập mã mặt hàng:");
//   newItem.name = prompt("Nhập tên mặt hàng:");
//   newItem.category = prompt("Nhập loại mặt hàng:");
//   newItem.price = prompt("Nhập giá cả:");

//   let existingItem = store.items.find(item => item.id === newItem.id);
//   if (existingItem !== undefined) {
//     alert("Mã mặt hàng đã tồn tại. Vui lòng nhập lại!");
//   } else {
//     store.items.push(newItem);
//     console.log("Mặt hàng mới đã được thêm vào kho:", newItem);
//   }
// }

// function searchItem() {
//   let keyword = prompt("Nhập từ khóa tìm kiếm:");
//   let result = store.items.filter(p => p.name.includes(keyword));
//   if (result.length === 0) {
//     console.log("Không tìm thấy mặt hàng nào chứa từ khóa tìm kiếm.");
//   } else {
//     console.log("Thông tin các mặt hàng có tên chứa từ khóa tìm kiếm:");
//     console.log(result);
//   }
// }

// function deleteItem() {
//   let id = prompt("Nhập mã mặt hàng cần xóa: ");
//   let index = store.items.findIndex(p => p.id === id);
//   if (index === -1) {
//     console.log("Không tìm thấy mặt hàng cần xóa.");
//   } else {
//     store.items.splice(index, 1);
//     console.log("Mặt hàng đã được xóa khỏi kho hàng.");
//     console.log(store.items);
// }
// }

// while (true) {
//   let action = prompt(`Bạn muốn thực hiện thao tác nào?
//     1. Cập nhật thông tin kho hàng
//     2. Thêm sản phẩm mới
//     3. Tìm kiếm mặt hàng
//     4. Xóa sản phẩm
//     5. Kết thúc chương trình`);

//   switch (action) {
//     case "1":
//       updateStoreInfo();
//       break;
//     case "2":
//       addNewItem();
//       break;
//     case "3":
//       searchItem();
//       break;
//     case "4":
//       deleteItem();
//       break;
//     case "5":
//       break;
//     default:
//       console.log("Bạn chưa nhận thông tin kho hàng");
//       break;
//   }
// }