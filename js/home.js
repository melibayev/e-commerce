let discountLastProducts = products.filter((el) => el.discount).slice(0,4);

let lastProducts = products.slice(-4);

let productsCopy = [...products];

let popularProducts = productsCopy.sort((a,b) => a.rating - b.rating).slice(-4);

const sale = document.getElementById("sale__products")
discountLastProducts.forEach((el) => {
    let card = getProductCard(el);
    sale.append(card);
})

const last = document.getElementById("last__products")
lastProducts.forEach((el) => {
    let card = getProductCard(el);
    last.append(card);
})


const popular = document.getElementById("popular__products")
popularProducts.forEach((el) => {
    let card = getProductCard(el);
    popular.append(card);
})

