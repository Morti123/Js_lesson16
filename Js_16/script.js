/* localStorage.setItem('name', 'param');  */ /* создать */
/* localStorage.getItem('name'); */ /*  получить */
/* localStorage.removeItem('name'); */ /* удалить элемент */
/* localStorage.clear(); */ /* очистить */
/* let person ={
    name: 'Timur',
    age: 1000-7,
}
localStorage.setItem('person', JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem('person'))); */

let user ={
    name: "Bogdan",
    password: "1234"
}
let el = document.body;
localStorage.setItem("User",JSON.stringify(user));
let spawn = false;

function createLogIn() {  
   if(spawn == false){
    let menu = document.createElement('div'); 
    menu.classList.add("menuDiv") ;
    menu.classList.add("FORMENU") ;
    let usname = document.createElement('h2'); 
    usname.innerText = "User Name" ;  
    usname.classList.add("FORMENU") ;
    let usnamebt = document.createElement('input'); 
    usnamebt.type = "text"
    usnamebt.classList.add("FORMENU") ;
    usnamebt.placeholder = "your name";  
    usnamebt.id = "UserName"; 
    let passw = document.createElement('h2'); 
    passw.innerText = "Password" ;  
    passw .classList.add("FORMENU") ;
    let passwbt = document.createElement('input'); 
    passwbt.classList.add("FORMENU") ;
    passwbt.type = "password"
    passwbt.placeholder = "password";  
    passwbt.id = "UserPassw"; 
    let conf = document.createElement('button'); 
    conf.classList.add("FORMENU") ;
    conf.classList.add("confirm");
    conf.innerText = "Confirm";
    conf.addEventListener("click",confirm)
    el.prepend(menu);    
    menu.append(usname);   
    menu.append(usnamebt);   
    menu.append(passw);   
    menu.append(passwbt); 
    menu.append(conf);
    menu.classList.add("trans");
    spawn = true;
   }
}  
function deleteMenu() {   
    let menus = document.querySelectorAll('.FORMENU');   
    for(i = 0; i < menus.length;i++){ 
        menus[i].remove(); 
    } 
}
function confirm(){
    let us = JSON.parse(localStorage.getItem("User"));
if(document.querySelector("#UserName").value == us.name && document.querySelector("#UserPassw").value == us.password)
{
alert("Done");
spawn = false;
deleteMenu();
butt.classList.toggle("hide");
el.classList.toggle("green");
}
else{
    if(document.querySelector("#UserName").value != us.name){
        alert("Неправильно введено Имя");
    }
    else{
        alert("Неправильно введен Пароль");
    }
}
}
let butt = document.querySelector(".button");
butt.addEventListener("click",createLogIn);