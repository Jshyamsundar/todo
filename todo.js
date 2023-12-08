const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function add(){
    if(input.value ===''){
        alert("write something");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    input.value="";

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false);












































// let input =document.querySelector('#input');
// let list = document.querySelector('#list');

// input.addEventListener("keyup",function(event){
//     if(event.key == "Enter"){
//         addItem(this.value)
//         this.value =""
//     }
// })

// let addItem = (input)=>{
//     let listItem = document.createElement("li");
//     listItem.innerHTML = `${input}<i>`;

//     listItem.addEventListener("click", function(){
//         this.classList.toggle('done');

//     })
//     listItem.querySelector("i").addEventListener("click",function(){
//         listItem.remove();
//     })
// list.appendChild(listItem);
// }