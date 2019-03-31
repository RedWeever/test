var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");
var count = 1;
var age = 28;
var usrName = "Igor";
var userSubscribed = true;

console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);

function addItem(){
  var newLi = document.createElement("li");
  newLi.innerHTML = ("Новая задача " + count);
  newLi.className = "item";
  myList.appendChild(newLi);
  count++;
}

function delItem(){
	 myList.removeChild(myList.lastChild);
  while (count > 1) {
   	count--;
  }
}

function grantAccess(){
 alert(usrName + ", Вам доступ разрешен");
 console.log("Доступ пользователю " + usrName + " разрешен.");
}

function chkAccess(){
	age = prompt('Ваш возраст?');
	if (age >= 18) { 
		if (userSubscribed){
   grantAccess();
		} 
		else {alert(usrName + ", доступ Вам запрещен!");}
	}
 else {alert(usrName + ", доступ Вам запрещен!");}
}


btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
btn3.addEventListener("click",	chkAccess	);