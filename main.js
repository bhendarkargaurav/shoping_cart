let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: "1",
        name: "causual Shirt",
        price: 45,
        img: "images/img-1.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
    }, 
    {
        id: "2",
        name: "Official Shirt",
        price: 55,
        img: "images/img-5.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
    }, 
    {
        id: "3",
        name: "party Cloths",
        price: 90,
        img: "images/img-2.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
    }, 
    {
        id: "4",
        name: "Combo Pack",
        price: 70,
        img: "images/img-3.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing"
    }]



let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map(() => {
        return `
        <div class="item">
            <img width="220" src="images/img-1.jpg" alt="">
            <div class="details">
                <h3>casual Shirt</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                <div class="price-quantity">
                    <h2>$45</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `
    }).join(" "))
}

generateShop();