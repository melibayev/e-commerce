// Modal
let person = document.querySelector(".person")
let mobilePerson = document.querySelector(".footer__person");
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modal-content")
let modalClose = document.querySelector(".modal-close");

// Add to favorite
let favoriteCount = document.querySelector(".liked");
let favoriteCountMObile = document.querySelector(".likedMobile")
let favoriteJson = localStorage.getItem("favorite");
let favorite = JSON.parse(favoriteJson) || [];


// category
let categoryJson = localStorage.getItem("category");
let category = JSON.parse(categoryJson) || [];

function toggleDropdown() {
    let dropdown = document.getElementById("toggle__list");
  
    if (dropdown.style.top === "67px") {
      dropdown.style.top = "-50%";
    } else {
      dropdown.style.top = "67px";
    }
}
  
let toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", toggleDropdown);
let toggleBtn = document.getElementById("toggle-btn")
toggleBtn.addEventListener("click", toggleDropdown)


function modalShow() {
  modal.classList.add("modal-show");
  modalContent.classList.add("modal-content-show")
}

function closeModal() {
  modal.classList.remove("modal-show");
  modalContent.classList.remove("modal-content-show")
}

person.addEventListener('click', modalShow);
mobilePerson.addEventListener('click', modalShow);
modalClose.addEventListener('click', closeModal)
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape" ){
    closeModal()
  }
})
modal.addEventListener('click', (e) =>{
  if(!modalContent.contains(e.target)) {
    closeModal()
    }
} )


// add to favorite
function getfavoriteCount() {
  favoriteCount.style.display = "none";
  favoriteCountMObile.style.display = "none"
  if (favorite.length > 0) {
    favoriteCount.style.display = "block";
    favoriteCountMObile.style.display = "block"
  }
  favoriteCount.textContent = favorite.length;
  favoriteCountMObile.textContent = favorite.length
}


getfavoriteCount();

function increase(id) {
  favorite = favorite.map((pr) => {
    pr.id === id && pr.quantity++;
    return pr;
  });
}
