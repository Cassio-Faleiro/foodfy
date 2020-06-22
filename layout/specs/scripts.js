const modalOverlay = document.querySelector('.modal__overlay')
const receps = document.querySelectorAll('.recipe__content')


for(let recep of receps){
    recep.addEventListener("click", function(){
        const img = recep.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `/layout/assets/${img}.png`
    })
}

// fecha o modal removendo a class active
modalOverlay.addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
