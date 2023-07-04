// product card start
function getProductCard({ image, description, price, discount, priceDiscount, rating, name }) {
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

const products = [
    {
      id: 1,
      name: "blinchiki",
      category: "bread",
      description: "Г/Ц Блинчики с мясом вес, Россия ",
      price: 50.50,
      priceDiscount: 44.50,
      rating: 2,
      discount: 50,
      image: "assets/images/home/blinchik.png",
    },
    {
      id: 2,
      name: "milk",
      category: "milkCheeseEgg",
      description: "Молоко паст. питьевое отборное...",
      price: 50.50,
      priceDiscount: 44.50,
      rating: 3,
      discount: 50,
      image: "assets/images/home/milk.png"
    },
    {
      id: 3,
      name: "kolbasaWithCheese",
      category: "milkCheeseEgg",
      description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      price: 50.50,
      priceDiscount: 44.50,
      rating: 4,
      discount: 50,
      image: "assets/images/home/kolbasawithcheese.png"
    },
    {
      id: 4,
      name: "kolbasaWithMeat",
      category: "milk-cheese-egg",
      description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
      price: 50.50,
      priceDiscount: 44.50,
      rating: 4,
      discount: 50,
      image: "assets/images/home/kolbasawithmeat.png"
    },
    {
      id: 5,
      name: "kombaynKolbasa",
      category: "meat-chicken-sausage",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 77.99,
      priceDiscount: 0,
      rating: 5,
      discount: 0,
      image: "assets/images/home/kombaynKolbasa.png"
    },
    {
      id: 6,
      name: "kolbasaWithCheese",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 159.99,
      priceDiscount: 0,
      rating: 4,
      discount: 0,
      image: "assets/images/home/kolbasawithcheese.png"
    },
    {
      id: 7,
      name: "kolbasa",
      category: "meat-chicken-sausage",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 599.99,
      priceDiscount: 0,
      rating: 4,
      discount: 0,
      image: "assets/images/home/kolbasa.png"
    },
    {
      id: 8,
      name: "milk",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 49.39,
      priceDiscount: 0,
      rating: 4,
      discount: 0,
      image: "assets/images/home/milk.png"
    },
    {
      id: 9,
      name: "yogurt",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 29.99,
      priceDiscount: 0,
      rating: 2,
      discount: 0,
      image: "assets/images/products/yogurt.png"
    },
    {
      id: 10,
      name: "yogurt",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 32.99,
      priceDiscount: 0,
      rating: 3,
      discount: 0,
      image: "assets/images/products/yogurt2.png"
    },
    {
      id: 10,
      name: "cream-cheese",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 129.99,
      priceDiscount: 0,
      rating: 3,
      discount: 0,
      image: "assets/images/products/cream-cheese.png"
    },
    {
      id: 11,
      name: "maslo",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 192.54,
      priceDiscount: 0,
      rating: 5,
      discount: 0,
      image: "assets/images/products/maslo.png"
    },
    {
      id: 12,
      name: "moloko",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 77.12,
      priceDiscount: 0,
      rating: 3,
      discount: 0,
      image: "assets/images/products/moloko.png"
    },
    {
      id: 2,
      name: "blinchiki",
      category: "bread",
      description: "Г/Ц Блинчики с мясом вес, Россия ",
      price: 50.50,
      priceDiscount: 44.50,
      rating: 2,
      discount: 50,
      image: "assets/images/home/blinchik.png",
    },
    {
      id: 3,
      name: "milk",
      category: "milkCheeseEgg",
      description: "Молоко паст. питьевое отборное...",
      price: 50.50,
      priceDiscount: 44.50,
      rating: 3,
      discount: 50,
      image: "assets/images/home/milk.png"
    },
    {
      id: 4,
      name: "kolbasaWithCheese",
      category: "milkCheeseEgg",
      description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
      price: 50.50,
      priceDiscount: 44.50,
      rating: 4,
      discount: 50,
      image: "assets/images/home/kolbasawithcheese.png"
    },
    {
      id: 5,
      name: "kolbasaWithMeat",
      category: "milk-cheese-egg",
      description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
      price: 50.50,
      priceDiscount: 44.50,
      rating: 4,
      discount: 50,
      image: "assets/images/home/kolbasawithmeat.png"
    },
    {
      id: 6,
      name: "kombaynKolbasa",
      category: "meat-chicken-sausage",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 77.99,
      priceDiscount: 0,
      rating: 5,
      discount: 0,
      image: "assets/images/home/kombaynKolbasa.png"
    },
    {
      id: 7,
      name: "kolbasaWithCheese",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 159.99,
      priceDiscount: 0,
      rating: 4,
      discount: 0,
      image: "assets/images/home/kolbasawithcheese.png"
    },
    {
      id: 8,
      name: "kolbasa",
      category: "meat-chicken-sausage",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 599.99,
      priceDiscount: 0,
      rating: 4,
      discount: 0,
      image: "assets/images/home/kolbasa.png"
    },
    {
      id: 9,
      name: "milk",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 49.39,
      priceDiscount: 0,
      rating: 4,
      discount: 0,
      image: "assets/images/home/milk.png"
    },
    {
      id: 10,
      name: "yogurt",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 29.99,
      priceDiscount: 0,
      rating: 2,
      discount: 0,
      image: "assets/images/products/yogurt.png"
    },
    {
      id: 11,
      name: "yogurt",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 32.99,
      priceDiscount: 0,
      rating: 3,
      discount: 0,
      image: "assets/images/products/yogurt2.png"
    },
    {
      id: 12,
      name: "cream-cheese",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 129.99,
      priceDiscount: 0,
      rating: 3,
      discount: 0,
      image: "assets/images/products/cream-cheese.png"
    },
    {
      id: 11,
      name: "maslo",
      category: "milkCheeseEgg",
      description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
      price: 192.54,
      priceDiscount: 0,
      rating: 5,
      discount: 0,
      image: "assets/images/products/maslo.png"
    },
    // {
    //   id: 12,
    //   name: "moloko",
    //   category: "milkCheeseEgg",
    //   description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    //   price: 77.12,
    //   priceDiscount: 0,
    //   rating: 3,
    //   discount: 0,
    //   image: "assets/images/products/moloko.png"
    // },
    
  ];




