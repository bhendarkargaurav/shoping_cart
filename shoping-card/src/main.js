console.log(shopItemsData);
let shop = document.getElementById("shop");



// Cart state
let basket = JSON.parse(localStorage.getItem("data")) || [];

// Generate shop UI
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
                <div id="${id}" class="quantity">
                ${search.item === undefined ? 0 : search.item }
                </div>
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

// Increment
let increment = (id) => {
  let search = basket.find((x) => x.id === id);

  if (!search) {
    basket.push({ id, item: 1 });
  } else {
    search.item += 1;
  }

  update(id);

  localStorage.setItem("data", JSON.stringify(basket));
};



let decrement = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search === undefined) return;

  else if(search.item === 0) return;

  else {
    search.item -= 1;
  }

  // remove if item = 0 from basket from local storage save space:
 

  update(id);
 basket = basket.filter((x) => x.item !== 0)
  localStorage.setItem("data", JSON.stringify(basket));
 
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
