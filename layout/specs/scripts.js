const modalOverlay = document.querySelector('.modal__overlay')
const receps = document.querySelectorAll('.recipe__content')


for(let recep of receps){
    recep.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

// fecha o modal removendo a class active
document.querySelector(".close__modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})