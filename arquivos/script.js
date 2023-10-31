var product = document.querySelector('#product')
var specifications = document.querySelector('#specifications')
var step1 = document.querySelector('#primeiro-ponto')
var step2 = document.querySelector('#segundo-ponto')
var step3 = document.querySelector('#terceiro-ponto')
var selectimg1 = document.querySelector('#selectimg1')
var selectimg2 = document.querySelector('#selectimg2')
var selectimg3 = document.querySelector('#selectimg3')
var selectimg4 = document.querySelector('#selectimg4')
var slide = document.querySelector('#slide')

//funções para scroll vertical:
function ScrollProduct(){
    window.scroll({
        top: 620,
        behavior: 'smooth'
    })
}
function ScrollSpecifications(){
    window.scroll({
        top: 1200,
        behavior: 'smooth'
    })
}

function Step1(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
    step1.style.border = '3px solid aqua'
    step2.style.border = 'none'
    step3.style.border = 'none'
    selectimg1.style.backgroundColor = 'aqua'
    selectimg1.style.scale = '1.5'
}
function Step2(){
    window.scroll({
        top: 650,
        behavior: 'smooth'
    })
    step1.style.border = 'none'
    step2.style.border = '3px solid aqua'
    step3.style.border = 'none'
}
function Step3(){
    window.scroll({
        top: 1350,
        behavior: 'smooth'
    })
    step1.style.border = 'none'
    step2.style.border = 'none'
    step3.style.border = '3px solid aqua'
}
product.addEventListener('click', ScrollProduct)
specifications.addEventListener('click', ScrollSpecifications)
step1.addEventListener('click', Step1)
step2.addEventListener('click', Step2)
step3.addEventListener('click', Step3)
window.addEventListener('load', Step1)

var bttsDown = document.querySelectorAll('.bttDown')
bttsDown[2].addEventListener('click', ScrollProduct)
bttsDown[3].addEventListener('click', ScrollSpecifications)