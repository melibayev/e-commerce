let productsRow = document.querySelector(".product__cards");
let searchInput = document.querySelector(".search__input");
let pagination = document.querySelector(".pagination");

let search = "";

let page = 1;



const LIMIT = 10;

let pages;


// product card start
function getAllProduct({id, image, description, discount, price, rating, name }) {
  let product = favorite.find((pr) => pr.id === id);
    // product card
    const productCard = document.createElement("div");
    productCard.className = "product__card";
  
    
    // card img start
    const productCardImg = document.createElement("div");
    productCardImg.className = "product__card__img";
    
    const productImg = document.createElement("img");
    productImg.src = image;
    productImg.alt = name;
    productCardImg.appendChild(productImg)
  
    const like = document.createElement("button");
    const likeIcon = document.createElement("i");
    likeIcon.className = "fa-solid fa-heart"
    like.appendChild(likeIcon)
    productCardImg.appendChild(like)
    
    if (product) {
      like.className = "liked"
    }
    like.addEventListener('click', () => {
      addToFavorite(id)
    })
  
    if (discount) {
      const discountInfo = document.createElement("div");
      discountInfo.className = "product__card__img__discount"
      const discountInfoTitle = document.createElement("p");
      discountInfoTitle.innerHTML = `-${discount}%`
      discountInfo.appendChild(discountInfoTitle);
      productCardImg.appendChild(discountInfo)
    }
  
    // card img end
  
    // card info start
    const productCardInfo = document.createElement("div");
    productCardInfo.className = "product__card__info";
  
    
    // product price
    const productsPrice = document.createElement("div");
    productsPrice.className = "product__card__info__price";
    productCardInfo.appendChild(productsPrice);
  
    const productPrice = document.createElement("div");
    productPrice.className = "product__right";
    productsPrice.appendChild(productPrice);
    
    
    const productPriceTitle = document.createElement("p");
    productPriceTitle.innerHTML = `${price}₽`;
    productPrice.appendChild(productPriceTitle)
    
    productCard.append(productCardImg, productCardInfo);
    // card info end
  
    // card info description
    const productDescription = document.createElement("div");
    productDescription.className = "product__card__info__description";
    productCardInfo.appendChild(productDescription);
  
    const productDescriptionTitle = document.createElement("p");
    productDescriptionTitle.innerHTML = `${description}`;
    productDescription.appendChild(productDescriptionTitle)
  
    // card rating start
    const cardRating = document.createElement("div");
    cardRating.className = "product__card__info__rating";
    let ratingCopy = rating;
    let counter = 0;
    for(let i = 0; i < 5; i++){
        const ratingStars = document.createElement("i");
        if(counter < ratingCopy){
            ratingStars.className = "fa-solid fa-star"
            cardRating.appendChild(ratingStars);
            counter++;   
        } else{
            ratingStars.className = "fa-regular fa-star"
            cardRating.appendChild(ratingStars);
        }
    }
    productCardInfo.appendChild(cardRating);
    // card rating end
    
    // card button
    const cardButton = document.createElement("div")
    cardButton.className = "product__card__info__btn";

    
    const btn = document.createElement("button")
    btn.innerHTML = "В корзину"
    cardButton.appendChild(btn);
    productCardInfo.appendChild(cardButton);
  
    return productCard;
  }
  // product card end


function getProducts() {
  let resultsProducts = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search) ||
      pr.description.toLowerCase().includes(search)
  );

  productsRow.innerHTML = ""

  pages = Math.ceil(resultsProducts.length / LIMIT);
  console.log(pages);

  getPagination();

  let start = (page - 1) * LIMIT;
  let end = start + LIMIT;

  resultsProducts.slice(start, end).forEach((pr) => {
    let card = getAllProduct(pr);
    productsRow.append(card);
  });
}


getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});




function getPagination() {
    let pgntList = ""
if (pages > 1) {
    pgntList += `<button class="page-btn" onclick="getPage('--')"><span class="page-link"><<</span></button>`
    pgntList += `<button class="page-btn" onclick="getPage('-')" ${page == 1 ? 'disabled' : ''}><span class="page-link"><</span></button>`
    
    for (let i = 1; i <= pages; i++) {
        pgntList += `<button class="page-btn ${i == page ? 'active' : ''}" onclick="getPage(${i})"><span class="page-link">${i}</span></button>`

    }
    
    pgntList += `<button class="page-btn" onclick="getPage('+')" ${page == pages ? 'disabled' : ''}><span class="page-link">></span></button>`
    pgntList += `<button class="page-btn" onclick="getPage('++')"><span class="page-link">>></span></button>`
    
    pagination.innerHTML = pgntList;

    } else {
        return pagination.innerHTML = ""
    }
}

function getPage(p) {
  if (p === "-") {
    page--;
  } else if (p === "+") {
    page++;
  }else if(p === "--"){
    page = 1;
  } else if (p === "++"){
    page = pages;
  }
  else {
    page = p;
  }
  getProducts();
}


function addToFavorite(id) {
  let product = products.find((pr) => pr.id == id);
  let check = favorite.find((pr) => pr.id == id);
  if (check) {
    increase(id);
  } else {
    // product.quantity = 1;
    // favorite.push(product);
    favorite.push({ ...product, quantity: 1 });
  }
  getProducts();
  localStorage.setItem("favorite", JSON.stringify(favorite));
  getfavoriteCount();
}