//your code here
var todoValue= document.getElementById('newTodoInput');
var btn = document.getElementById('addTodoBtn');
var list = document.getElementById('todoList');

function addTodo(){
	if(todoValue.value){
		var li=document.createElement('li');
		li.textContent=todoValue.value;
		list.appendChild(li);
		todoValue.value="";
	}
}
btn.addEventListener("click",addTodo);
