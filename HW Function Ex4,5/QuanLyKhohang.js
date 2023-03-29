//5 
// let store = {
//   name: "Kho hàng ABC",
//   address: "123 đường XYZ",
//   owner: "Nguyễn Văn A",
//   items: [
//     { id: 001, name: "Chocolate", category: "White", price: 10 },
//     { id: 002, name: "Strawberry", category: "Black", price: 20 },
//     { id: 003, name: "Banana", category: "Red", price: 30 },
//     { id: 004, name: "Orange", category: "Yellow", price: 40 },
//     { id: 005, name: "Mango", category: "Green", price: 50 },
//     { id: 006, name: "Pineapple", category: "Blue", price: 60 },
//     { id: 007, name: "Peach", category: "Purple", price: 70 },
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