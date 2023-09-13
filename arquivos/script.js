var product = document.querySelector('#product')
var specifications = document.querySelector('#specifications')
var step1 = document.querySelector('#primeiro-ponto')
var step2 = document.querySelector('#segundo-ponto')
var step3 = document.querySelector('#terceiro-ponto')
var selectimg1 = document.querySelector('#selectimg1')
var selectimg2 = document.querySelector('#selectimg2')
var selectimg3 = document.querySelector('#selectimg3')
var selectimg4 = document.querySelector('#selectimg4')
var img1 = document.querySelector('#IMG1')
var img2 = document.querySelector('#IMG2')
var img3 = document.querySelector('#IMG3')
var img4 = document.querySelector('#IMG4')
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

//funções para scroll do slide:
function Img1(){
    img1.style.scale = '1.5'
    img1.style.transition = '0.5s'
    img2.style.scale = '0.8'
    img2.style.transition = '0.5s'
    img2.style.marginLeft = '50px'
    img3.style.scale = '0.7'
    img3.style.marginLeft = '-80px'
    img3.style.transition = '0.5s'
    img4.style.scale = '0.4'
    img4.style.marginLeft = '-100px'
    img4.style.transition = '0.5s'
    selectimg1.style.backgroundColor = 'aqua'
    selectimg1.style.scale = '1.6'
    selectimg2.style.scale = '1'
    selectimg2.style.backgroundColor = 'transparent'
    selectimg3.style.backgroundColor = 'transparent'
    selectimg3.style.scale = '1'
    selectimg4.style.backgroundColor ='transparent'
    selectimg4.style.scale = '1'
}
function Img2(){
    img2.style.scale = '1.5'
    img2.style.transition = '0.5s'
    img1.style.scale = '0.8'
    img1.style.marginRight = '0px'
    img3.style.marginLeft = '10px'
    img3.style.scale = '0.8'
    img4.style.scale = '0.6'
    img4.style.marginLeft = '-50px'
    selectimg1.style.backgroundColor = 'transparent'
    selectimg1.style.scale = '1'
    selectimg2.style.scale = '1.6'
    selectimg2.style.backgroundColor = 'aqua'
    selectimg3.style.backgroundColor = 'transparent'
    selectimg3.style.scale = '1'
    selectimg4.style.backgroundColor ='transparent'
    selectimg4.style.scale = '1'
}
function Img3(){
    img2.style.scale = '0.8'
    img2.style.transition = '0.5s'
    img2.style.marginRight = '80px'
    img1.style.scale = '0.4'
    img1.style.marginRight = '-50px'
    img3.style.scale = '1.5'
    img3.style.transition = '0.5s'
    img1.style.marginLeft = '30px'
    img4.style.scale = '0.8'
    img4.style.transition = '0.5s'
    img4.style.marginLeft = '10px'
    selectimg1.style.backgroundColor = 'transparent'
    selectimg1.style.scale = '1'
    selectimg2.style.scale = '1'
    selectimg2.style.backgroundColor = 'transparent'
    selectimg3.style.backgroundColor = 'aqua'
    selectimg3.style.scale = '1.6'
    selectimg4.style.backgroundColor ='transparent'
    selectimg4.style.scale = '1'
}
function Img4(){
    img2.style.scale = '0.7'
    img2.style.transition = '0.5s'
    img2.style.marginRight = '30px'
    img1.style.scale = '0.4'
    img1.style.marginRight = '-50px'
    img3.style.scale = '1'
    img3.style.transition = '0.5s'
    img3.style.marginLeft = '-80px'
    img4.style.scale = '1.5'
    img4.style.marginLeft = '-20px'
    selectimg1.style.backgroundColor = 'transparent'
    selectimg1.style.scale = '1'
    selectimg2.style.scale = '1'
    selectimg2.style.backgroundColor = 'transparent'
    selectimg3.style.backgroundColor = 'transparent'
    selectimg3.style.scale = '1'
    selectimg4.style.backgroundColor ='aqua'
    selectimg4.style.scale = '1.6'
}
window.addEventListener('load', Img1)
selectimg1.addEventListener('click', Img1)
selectimg2.addEventListener('click', Img2)
selectimg3.addEventListener('click', Img3)
selectimg4.addEventListener('click', Img4)