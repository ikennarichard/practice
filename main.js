let id =(id)=>document.getElementById(id);
let classes=(classes)=>document.getElementsByClassName(classes);

//form inputs
let username = id('username'),
email= id('email'),
password=id('password'),
form= id('form'),

errorMessage= classes('error'),
successIcon= classes('success-icon'),
failureIcon= classes('failure-icon');

//submit event listener

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    engine(username, 0, 'Username cant be blank');
    engine(email, 1, 'Email cant be blank');
    engine(password, 2, 'Username cant be blank');
    
});


//function for form validation

let engine=(id, serial, message)=>{
    if(id.value.trim()===''){
errorMessage[serial].innerHTML=message;
id.style.border= '2px solid red';

//icons
failureIcon[serial].style.opacity='1';
successIcon[serial].style.opacity='0';
    }
    else{
errorMessage[serial].innerHTML='';
id.style.border= '2px solid green';
//icons
failureIcon[serial].style.opacity='0';
successIcon[serial].style.opacity='1';
    }
};