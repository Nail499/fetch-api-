let id = new URLSearchParams(window.location.search).get("id");
let table = document.getElementById("tablemain")
fetch(`https://northwind.vercel.app/api/products/${id}`)
.then(res=>res.json())
.then(data=>{

    
        table.innerHTML+=
        `   <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.unitPrice}</td>
        <td >${data.unitsInStock}</td>
        
      </tr>`
    })
