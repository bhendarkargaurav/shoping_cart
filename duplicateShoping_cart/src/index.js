console.log(shopItemsData)

let shop = document.getElementById("shop");


let basket = JSON.parse(localStorage.getItem("data")) || [];

console.log("basket data is", basket);