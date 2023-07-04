let person = document.querySelector(".person")
let mobilePerson = document.querySelector(".footer__person");
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modal-content")
let modalClose = document.querySelector(".modal-close");



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
  if(e.target !== modalContent) {
    closeModal()
  }
} )
