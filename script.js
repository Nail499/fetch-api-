let table = document.getElementById("tablemain");
let input = document.getElementById("search");

fetch("https://northwind.vercel.app/api/products")
.then(response=>response.json())
.then(data=>{
    data.forEach(item=>{
        table.innerHTML+=
        `   <tr>
        <td>${item.id}</td>
        <td><a href="info.html?id=${item.id}" target ="_blank">${item.name}</a></td>
        <td>${item.unitPrice}</td>
        <td >${item.unitsInStock}</td>
        <td style="display:flex; justify-content:center; gap:20px;"><button><a href="add.html?id=${item.id}" target ="_blank">Edit</a></button><button>Delete</button></td>
      </tr>`
    })
    input.addEventListener("input",(e)=>{
           let filter = data.filter((el)=>{
            return el.name.toLowerCase().startsWith(e.target.value)
        
           })
           table.innerHTML= `
           <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>STOCK</th>
        </tr>`;
        filter.forEach(element =>{
            table.innerHTML += `
            <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.unitPrice}</td>
            <td>${element.unitsInStock}</td>
          </tr>
            `
        })
            
    })
 
})







