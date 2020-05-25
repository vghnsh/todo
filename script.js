var button = document.getElementById('enter');
var button1=document.getElementById('del')
var input= document.getElementById('user');
var ul=document.querySelector("ul");

function count(){
	return user.value.length;
}

function createList(){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(user.value)	);
	ul.appendChild(li);
	user.value="";
}

function clickAdd(){
	if (count()>0)
	{
		createList()
	}
}
function clickAddAfterkey(){
	if (count()>0 && event.keyCode===13)
	{
		createList()
	}
}
function clickrem(){
	var list = document.getElementById("mList");
  list.removeChild(list.childNodes[1]);
}
button1.addEventListener("click",clickrem);
button.addEventListener("click",clickAdd);
input.addEventListener("keypress",clickAddAfterkey);
