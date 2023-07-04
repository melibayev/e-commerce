let productsRow = document.querySelector(".home");
let searchInput = document.querySelector(".search__input");
let pagination = document.querySelector(".pagination");

let search = "";

let page = 1;

const LIMIT = 10;

let pages;

function getProducts() {
  let resultsProducts = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search) ||
      pr.description.toLowerCase().includes(search)
  );

  productsRow.innerHTML = "";

  pages = Math.ceil(resultsProducts.length / LIMIT);

  getPagination();

  let start = (page - 1) * LIMIT;
  let end = start + LIMIT;

  resultsProducts.slice(start, end).map((pr) => {
    productsRow.innerHTML += getProductCard(pr);
  });
}


getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});


function getPagination() {
  if (pages > 1) {
    pagination.innerHTML = `<li class="page-item ${
      page === 1 ? "disabled" : ""
    }"><button onClick="getPage('-')" class="page-link">Previous</button></li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li class="page-item ${
        page === i ? "active" : ""
      }"><button onClick="getPage(${i})" class="page-link">${i}</button></li>`;
    }

    pagination.innerHTML += `<li class="page-item ${
      page === pages ? "disabled" : ""
    }"><button onClick="getPage('+')" class="page-link">Next</button></li>`;
  } else {
    pagination.innerHTML = "";
  }
}

function getPage(p) {
  if (p === "-") {
    page--;
  } else if (p === "+") {
    page++;
  } else {
    page = p;
  }
  getProducts();
}
