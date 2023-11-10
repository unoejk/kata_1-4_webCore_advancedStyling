'use strict'

const testBtn=document.querySelector('.testBtn')
let sideBar=document.querySelector('.sideBar')

testBtn.addEventListener('click',()=>{
    if (sideBar.classList.contains('sideBar--isOpen')){
        sideBar.classList.remove('sideBar--isOpen')
    }else {
        sideBar.classList.add('sideBar--isOpen')
    }
})



// i.classList.contains('class_name')  // возвращает true если есть соответствующий класс