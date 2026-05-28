let editQuantity = document.getElementById("editQuantity");
let editPrice = document.getElementById("editPrice");
let editImportDate = document.getElementById("editDate");

let importItem = document.getElementById("importItem");
let importName = document.getElementById("importName");
let importCategory = document.getElementById("importCategory");
let importUnit = document.getElementById("importUnit");
let importQuantity = document.getElementById("importQuantity");
let importPrice = document.getElementById("importPrice");
let importSupplierCode = document.getElementById("importSupplierCode");
let importDate = document.getElementById("importDate");
let importExpiryDate = document.getElementById("expiryDate");

let exportInfo = document.getElementById("exportInfo");
let exportQuantity = document.getElementById("exportQuantity");

let tableInventory = document.getElementById("listInventory");
let tableTransaction = document.getElementById("listTransaction");

let text = "";

let editIndex;
let editExportIndex;
console.log(lots);
console.log(products);
console.log(transactions);

function getValueForNull(arrayLots, arrayProducts){
    for (let i=0; i<lots.length; i++){
        lots[i].setNullAttributes(arrayLots,arrayProducts);
    }
}

function displayInventoryTable(arrayLots){
    for (let i = 0; i<arrayLots.length; i++){
        text += `<tr>
                    <td>${i+1}</td>
                    <td>${arrayLots[i].productItemCode}</td>
                    <td>${arrayLots[i].productName}</td>
                    <td>${arrayLots[i].productCategory}</td>
                    <td>${arrayLots[i].productUnit}</td>
                    <td>${arrayLots[i].quantity}</td>
                    <td>${arrayLots[i].lotCode}</td>
                    <td>${arrayLots[i].costPrice}</td>
                    <td>${arrayLots[i].importDate}</td>
                    <td>${arrayLots[i].status}</td>
                    <td><button onclick="editInventory(${i})">Sửa</button></td>
                    <td><button onclick="deleteInventory(${i})">Xóa</button></td>
                    <td><button onclick="editExportInventory(${i})">Xuất</button></td>
                </tr>`;
    }
    tableInventory.innerHTML = text;
}

function editInventory(index){
    editQuantity.value = lots[index].quantity;
    editPrice.value = lots[index].costPrice;
    editImportDate.value = lots[index].importDate;
    editIndex = index;
}
function updateInventory(){
    lots[editIndex].quantity = editQuantity.value;
    lots[editIndex].costPrice = editPrice.value;
    lots[editIndex].importDate = editImportDate.value;
    // console.log(lots[editIndex]);
    // console.log(lots);
    text ="";
    getValueForNull(lots,products);
    displayInventoryTable(lots);
    editForm.reset();
}
function deleteInventory(index){
    lots.splice(index,1);
    console.log(lots);
    text = "";
    getValueForNull(lots,products);
    displayInventoryTable(lots);
}
function importInventory(){
    let importProduct = new Product(getNewId("P", products),
                            importItem.value, 
                            importName.value,
                            importCategory.value, 
                            importUnit.value);
    products.push(importProduct);
    let importLot = new Lot(getNewId("L",lots), 
                            products[products.length-1].id, 
                            importSupplierCode.value, 
                            importQuantity.value,
                            importDate.value,
                            importExpiryDate.value, 
                            importPrice.value,)
    lots.push(importLot);
    getValueForNull(lots,products);
    text ="";
    displayInventoryTable(lots);
    console.log(products);
    console.log(lots); 
}
function editExportInventory(index){
    exportInfo.innerHTML = `Item: ${lots[index].productItemCode} <br>
                            Tên sản phẩm: ${lots[index].productName} <br>
                            Loại sản phẩm: ${lots[index].productCategory} <br>
                            Đơn vị: ${lots[index].productUnit} <br>
                            Khối lượng: ${lots[index].quantity} <br>
                            Lot: ${lots[index].lotCode} <br>
                            Giá: ${lots[index].costPrice} <br>
                            Ngày nhập: ${lots[index].importDate} <br>
                            Trạng thái: ${lots[index].status}`;
    editExportIndex = index;
}
function exportInventory(){
    lots[editExportIndex].quantity -= exportQuantity.value;
    text = "";
    displayInventoryTable(lots);
    exportForm.reset();
}

getValueForNull(lots,products);
displayInventoryTable(lots);



