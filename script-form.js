// Name Validation
let name=document.querySelector("#name");
let messageName=document.querySelector("#messageForName")
//check empty
name.addEventListener('blur' , function(){
    if(name.value==""){
        messageName.innerHTML="fill your name please !"
        name.focus();
}
else{
    messageName.innerHTML=""
}
})

let regexName =/^[A-Za-z]+$/;
name.addEventListener('change' , function(){

    if(!name.value.match(regexName) || name.value.length < 5){
        name.setAttribute('class','form-control is-invalid')
        name.focus();
    }
    else{
        name.setAttribute('class','form-control is-valid')

    }
})

//email validation

//check empty
let mail = document.querySelector("#email");
let messageMail =  document.querySelector("#messageForEmail");
mail.addEventListener('blur' , function(){
    if(mail.value==""){
        messageMail.innerHTML = "fill your email please !"
        mail.focus()
    }
    else{
        messageMail.innerHTML = ""
    }
})

var regexEmail = /\S+@\S+\.\S+/;

mail.addEventListener('change' , function(){
    if(!mail.value.match(regexEmail) || mail.value==""){
        mail.setAttribute('class' , 'form-control is-invalid')
        mail.focus();
    }
    else{
        mail.setAttribute('class' , 'form-control is-valid')

    }
})





