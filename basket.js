const tbody=document.getElementById("tbody")
let basket=[]
if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify(basket))
}
else{
 basket=JSON.parse(localStorage.getItem("basket"))
}
function renderUI(basket){
    let innerHTML=""
    for (let i = 0; i < basket.length; i++) {
        innerHTML+=`  <tr>
        <td><img width="100px" src="${basket[i].image}" alt=""></td>
        <td>${basket[i].name}</td>
        <td>${parseInt(basket[i].price)*basket[i].count}</td>
        <td>${basket[i].count}</td>
        <td><button onclick="deleteHandler(${basket[i].id})" class="btn btn-danger">Delete</button></td>
      </tr>`
    }
    tbody.innerHTML=innerHTML
}
renderUI(basket)

function deleteHandler(id){
let target=basket.find(e=>e.id==id)
let indexOfTarget=basket.indexOf(target)

if(target.count>1){
    target.count--
    localStorage.setItem("basket",JSON.stringify(basket))
}
else{
    basket.splice(indexOfTarget,1)
    localStorage.setItem("basket",JSON.stringify(basket))  
}

renderUI(basket)
}