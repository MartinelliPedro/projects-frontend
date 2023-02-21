const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const tela = document.querySelector(".tela")

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        tela.innerHTML += evt.target.innerHTML
    })
})


