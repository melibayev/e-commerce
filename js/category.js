const categoryRow = document.querySelector(".product__cards");
const filteredProducts = products.filter((product) => product.category === category);

categoryRow.innerHTML = ""
filteredProducts.forEach((el) => {
    let card = getAllProduct(el);
    categoryRow.append(card);
})

if (categoryRow.innerHTML === "") {
    document.querySelector("#home").style.padding = "200px 0 360px 0"
}