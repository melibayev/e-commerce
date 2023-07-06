function getCatalogue({description, image, category}) {
    const card = document.createElement("div")
    card.className = "catalogue__card"

    const link = document.createElement("a");
    link.href = "category.html"
    
    const catalogueImg = document.createElement("img");
    catalogueImg.src = `${image}`;

    catalogueImg.addEventListener('click', () => {
        categorySet(category)
    })
    
    const desc = document.createElement("p");
    desc.innerHTML = `${description}`;

    link.append(catalogueImg, desc);
    card.appendChild(link)

    return card; 
}

const catalogueCard = document.getElementById("catalogue__cards")
catalogue.forEach((el) => {
    let card = getCatalogue(el);
    catalogueCard.append(card);
})


// function categorySet(description) {
//     let product = catalogue.find((pr) => pr.id == id);
//     let check = category.find((pr) => pr.id == id);
//     if (check) {
//       increase(id);
//     } else {
//     //   // product.quantity = 1;
//     //   // favorite.push(product);
//       category.push({ ...product, quantity: 1 });
//     }
//     getCatalogue();
//     localStorage.setItem("category", JSON.stringify(category));
//   } 

function categorySet(category) {
    localStorage.setItem("category", JSON.stringify(category))
}