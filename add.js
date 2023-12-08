let id = new URLSearchParams(window.location.search).get("id");
let table = document.getElementById("tablemain");






// save.addEventListener("click",function(e){

// console.log(e);
// //     fetch('https://northwind.vercel.app/api/products/',
// //     {
// //     method: "PATCH",

// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({name: nameinput.value, unitPrice : priceinput.value, unitsInStock : stockinput.value }), // body data type must match "Content-Type" header
// //   })
// //   .then(res =>res.json())
// //   .then(data => console.log(data))
// }

// )



fetch(`https://northwind.vercel.app/api/products/${id}`)
    .then(ress => ress.json())
    .then(data => {


        table.innerHTML +=
            `   <tr>
        <td>${data.id}</td>
        <td><input type="text" id='name' style="width:100%; " value="${data.name}"></td>
        <td><input type="text" id='price' style="width:100%; " value="${data.unitPrice}"></td>
        <td><input type="text" id='stock' style="width:100%; " value="${data.unitsInStock}"></td>
        <td><button id="save">Save</button></td>
        
        
        
      </tr>`

        let saveButton = document.querySelector('#save');

        saveButton.addEventListener('click', () => {

            const nameinput = document.querySelector('#name');
            const priceinput = document.querySelector('#price');
            const stockinput = document.querySelector('#stock');

            fetch('https://northwind.vercel.app/api/products/'+id,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name: nameinput.value, unitPrice: priceinput.value, unitsInStock: stockinput.value }), // body data type must match "Content-Type" header
                })
                .then(res => res.json())
                .then(data => console.log(data))
        }

        )
    })


    







