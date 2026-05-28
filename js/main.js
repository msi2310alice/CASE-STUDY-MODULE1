let text = "";
console.log(lots);
console.log(products);
console.log(transactions);

    for (let i = 0; i<lots.length; i++){
        text += `<tr>
                    <td>${i+1}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${lots[i].lotCode}</td>
                    <td>${lots[i].costPrice}</td>
                    <td>${lots[i].importDate}</td>
                    <td></td>
                    <td></td>
                    <td><button>Sửa</button></td>
                    <td><button>Xóa</button></td>

                </tr>`;
    }
    document.getElementById("list").innerHTML = text;


