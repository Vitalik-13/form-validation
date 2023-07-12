// ПРИКЛАД ВАЛІДАЦІЇ ФОРМИ

let mainForm = document.querySelector(".main-form")
let inputs = document.querySelectorAll (".input-block")
let chexBox = document.querySelector(".check-box")
let button = document.querySelector(".send")

function chexBoxClick(){
    if(!chexBox.checked){
      button.setAttribute('disabled','disabled')
    }else{
        button.removeAttribute("disabled")
    }
}
chexBox.addEventListener("click",chexBoxClick)

function formValidation(form){

    let result = true



function removeError(input){
    let parent = input.parentElement
    if(parent.classList.contains("red")){
        parent.classList.remove("red")
    }
   
    
}

function removeInputBackgraundInput(input){
    if(input.classList.contains("input-block-error")){
        input.classList.remove("input-block-error")
    }
}


function createError(input,text){
    let parent = input.parentElement
      let errorElement = document.createElement("p")
      errorElement.textContent=text
      parent.append(errorElement)
      parent.classList.add("red")  
      
}



function createBackgraundInput(input){
    input.classList.add('input-block-error')
}
    


 inputs.forEach((item)=>{
    removeError(item)
    removeInputBackgraundInput(item)
    if(item.value == ''){
      createError(item,'Не введіні дані')
      createBackgraundInput(item)
       result=false
    }
 })
 
 return result
}





mainForm.addEventListener("submit",function(event){
    event.preventDefault()
   

    if(formValidation(mainForm)==true){
        alert("Форма успішно відправлена")
        mainForm.reset()                                            // після успішної відправки форми очищаю її поля, якщо відправка не відбулася
    }                                                                // поля не очищуються
   
   
})















