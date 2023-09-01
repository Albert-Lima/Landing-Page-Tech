var product = document.querySelector('#product')
var specifications = document.querySelector('#specifications')
var step1 = document.querySelector('#primeiro-ponto')
var step2 = document.querySelector('#segundo-ponto')
var step3 = document.querySelector('#terceiro-ponto')
var Img1 = document.querySelector('#Img1')

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
    Img1.style.backgroundColor = 'aqua'
    Img1.style.scale = '1.5'
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


window.addEventListener('load', Step1)
product.addEventListener('click', ScrollProduct)
specifications.addEventListener('click', ScrollSpecifications)
step1.addEventListener('click', Step1)
step2.addEventListener('click', Step2)
step3.addEventListener('click', Step3)
