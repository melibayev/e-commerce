const favoriteRow = document.querySelector(".product__cards");

// sorting


const largeBtn = document.querySelector(".large")
const smallBtn = document.querySelector(".small")


function getFavoriteProducts() {
    // totalPrice.textContent =
    //   favorite.reduce((acc, pr) => acc + pr.price * pr.quantity, 0) + " $";
  
    favoriteRow.innerHTML = "";

    favorite.forEach((el) => {
        let card = getAllProduct(el);
        favoriteRow.append(card);
    })
  }

  getFavoriteProducts();


  function controlQuantity(id, type) {
    if (type === "+") {
      increase(id);
    } else if (type === "-") {
      let product = favorite.find((pr) => pr.id === id);
      if (product.quantity === 1) {
        let isDelete = confirm(
          "Do you want to remove this product from the favorite ?"
        );
        if (isDelete) {
          favorite = favorite.filter((pr) => pr.id !== id);
        }
      } else {
        favorite = favorite.map((pr) => {
          pr.id === id && pr.quantity--;
          return pr;
        });
      }
      getfavoriteCount();
    }
  
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getfavoriteProducts();
  }
  

  // Sorting
  function getLargeProducts() {
    const largeToSmall = favorite.sort((a,b) => b.price - a.price);
    favoriteRow.innerHTML = ""
    largeToSmall.forEach((el) => {
      let card = getAllProduct(el);
      favoriteRow.append(card)
    })
  }
  function getSmallProducts() {
    const smallToLarge = favorite.sort((a,b) => a.price - b.price);
    favoriteRow.innerHTML = ""
    smallToLarge.forEach((el) => {
      let card = getAllProduct(el);
      favoriteRow.append(card)
    })
  }

  largeBtn.addEventListener('click', getLargeProducts)
  smallBtn.addEventListener('click', getSmallProducts)