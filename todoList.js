const inputText = document.getElementById('task');
const toDoList = document.getElementById('list');

let ulList = document.getElementsByTagName("li"); //number of li




// x button to delete list for each li.
for(let i = 0; i<ulList.length;i++){
    var span = document.createElement("span");
    var textContent = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(textContent);
    ulList[i].appendChild(span);

}


function newElement(){
   
   var newLi = document.createElement("li");
   toDoList.appendChild(newLi);
   

}