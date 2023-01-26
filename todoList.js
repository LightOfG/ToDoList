const taskDom = document.getElementById('task');
const todoListDOM = document.getElementById('list');

let ulList = document.getElementsByTagName("li"); //number of li
let btn = document.querySelector("#liveToastBtn")

btn.addEventListener('click',newElement);


// x button to delete list for each li.
for(let i = 0; i<ulList.length;i++){
 let closeButton = document.createElement("span");
 closeButton.textContent = "\u00D7";
 closeButton.classList.add("close");
 closeButton.onclick = removeItem;
 ulList[i].append(closeButton);
 
}

function newElement(){  

  let newLi = document.createElement("li");
  let inputValue = document.getElementById("task").value;
  let x = document.createTextNode(inputValue);

  newLi.appendChild(x);

  if(inputValue==""){
    alert("No empty task!")
  }
  else{
    document.getElementById("list").appendChild(newLi);
  }
  document.getElementById("task").value="";
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(text);
  newLi.appendChild(span);


  for(let i = 0; i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display="none";
    }
  }
}

function removeItem(){
var  remove = document.getElementsByClassName("close");
for(let i = 0; i<remove.length;i++){
    remove[i].onclick= function(){
        var div = this.parentElement;
        div.style.display="none";
    }
}
}