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
    getProductCard();
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getfavoriteCount();
  }

// product card start
function getProductCard({id, image, description, price, discount, priceDiscount, rating, name }) {
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

  if (priceDiscount) {
      const productDiscountPrice = document.createElement("div");
      productDiscountPrice.className = "product__left";
      
      const productDiscountPriceTitle = document.createElement("p");
      productDiscountPriceTitle.innerHTML = `${priceDiscount}₽`;
      productDiscountPrice.appendChild(productDiscountPriceTitle);
      
      const productDiscountPriceInfo = document.createElement("span");
      productDiscountPriceInfo.innerHTML = `С картой`;
      
      productDiscountPrice.append(productDiscountPriceTitle, productDiscountPriceInfo);
      productsPrice.appendChild(productDiscountPrice);
  }
  const productPrice = document.createElement("div");
  productPrice.className = "product__right";
  productsPrice.appendChild(productPrice);
  
  
  const productPriceTitle = document.createElement("p");
  productPriceTitle.innerHTML = `${price}₽`;
  productPrice.appendChild(productPriceTitle)
  if(priceDiscount){
    const productPriceInfo = document.createElement("span");
    productPriceInfo.innerHTML = `Обычная`;
    productPrice.appendChild(productPriceInfo);
  }
  
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



