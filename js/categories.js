function getCatalogue({description, image}) {
    const card = document.createElement("div")
    card.className = "catalogue__card"

    const link = document.createElement("a");
    link.href = "#"
    
    const catalogueImg = document.createElement("img");
    catalogueImg.src = `${image}`;
    
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

