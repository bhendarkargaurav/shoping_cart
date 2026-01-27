// let shop = document.getElementById("shop");

// let shopItemsData = [
//     {
//         id: "1",
//         name: "causual Shirt",
//         price: 45,
//         img: "images/img-1.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
//     }, 
//     {
//         id: "2",
//         name: "Official Shirt",
//         price: 55,
//         img: "images/img-4.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
//     }, 
//     {
//         id: "3",
//         name: "party Cloths",
//         price: 90,
//         img: "images/img-2.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
//     }, 
//     {
//         id: "4",
//         name: "Combo Pack",
//         price: 70,
//         img: "images/img-3.jpg",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
//     }]




// let basket = JSON.parse(localStorage.getItem("data")) || [];

// let generateShop = () => {
//     return (shop.innerHTML = shopItemsData.map((x) => {
//         let {id, name, price, img, desc} = x;
//         let search = basket.find((x) => x.id === id) || [];
//         return `
//         <div id=product-id-${id} class="item">
//             <img width="220" src= ${img} alt="">
//             <div class="details">
//                 <h3>${name}</h3>
//                 <p>${desc}</p>
//                 <div class="price-quantity">
//                     <h2>${price}</h2>
//                     <div class="buttons">
//                         <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
//                         <div id=${id} class="quantity">${search.item === undefined ? 0:search.item}</div>
//                         <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
//     }).join(" "))
// }

// generateShop();



// let increment = (id) => {

//     let search = basket.find((x)=> x.id === id );
//     if(search === undefined) {
//         basket.push({
//         id:String(id), 
//         item: 1,
//     })
     
//     }
//     else{
//         search.item += 1;
//     }
//     localStorage.setItem("data", JSON.stringify(basket));
// //    console.log(basket);
//    update(id);
// }

// let decrement = (id) => {
//       let search = basket.find((x)=> x.id === id );
//     if (search.item === 0) return;
//     else{
//         search.item -= 1;
//     }
// //    console.log(basket);
// localStorage.setItem("data", JSON.stringify(basket));
//    update(id);
// }



// // updating number
// let update = (id) => {
//     let search = basket.find((x) => x.id === id)
//     // console.log(search.item)

//     // we want the numbers in frountend so
//     document.getElementById(id).innerHTML = search.item;
//     calculation();
// };


// //calculate all the number and display in the cart
// let calculation = () => {
//     let cartIcon = document.getElementById("cartAmount");
//     cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0)
// };

// calculation();









let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "1",
    name: "Casual Shirt",
    price: 45,
    img: "images/img-1.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: "2",
    name: "Official Shirt",
    price: 55,
    img: "images/img-4.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: "3",
    name: "Party Clothes",
    price: 90,
    img: "images/img-2.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
  {
    id: "4",
    name: "Combo Pack",
    price: 70,
    img: "images/img-3.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
  },
];

// 🧺 Cart state
let basket = JSON.parse(localStorage.getItem("data")) || [];

// 🏪 Generate shop UI
let generateShop = () => {
  shop.innerHTML = shopItemsData
    .map((item) => {
      let { id, name, price, img, desc } = item;
      let search = basket.find((x) => x.id === id) || { item: 0 };

      return `
        <div id="product-id-${id}" class="item">
          <img width="220" src="${img}" alt="${name}">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
              <h2>$ ${price}</h2>
              <div class="buttons">
                <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
                <div id="${id}" class="quantity">${search.item}</div>
                <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
};

generateShop();

// ➕ Increment
let increment = (id) => {
  let search = basket.find((x) => x.id === id);

  if (!search) {
    basket.push({ id, item: 1 });
  } else {
    search.item += 1;
  }

  localStorage.setItem("data", JSON.stringify(basket));
  update(id);
};

// ➖ Decrement
// let decrement = (id) => {
//   let search = basket.find((x) => x.id === id);
//   if (!search) return;

//   search.item -= 1;

//   if (search.item === 0) {
//     basket = basket.filter((x) => x.id !== id);
//   }

//   localStorage.setItem("data", JSON.stringify(basket));
//   update(id);
// };



let decrement = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search === undefined) return;

  else if(search.item === 0) return;

  else {
    search.item -= 1;
  }

  localStorage.setItem("data", JSON.stringify(basket));
  update(id);
};

// 🔄 Update UI
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search ? search.item : 0;
  calculation();
};

// 🧮 Cart count
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket
    .map((x) => x.item)
    .reduce((x, y) => x + y, 0);
};

// Initial cart count on reload
calculation();
