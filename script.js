const Box = document.getElementById("Box");
const List = document.getElementById("list");


const addTask=()=>{
    if(Box.value === ""){
        alert("You must write something");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" name="" id="check">
        <label for="check">${Box.value}</label>
        <i class="fa-solid fa-trash-can"></i>`;
        List.appendChild(li);

        let Span = document.createElement("span");
        Span.innerHTML = `\u00d7`;
        li.appendChild(Span);
        
    }
    Box.value = "";
    Data();
}

List.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false)

function Data(){
    localStorage.setItem("data", List.innerHTML);
}

function getData(){
    List.innerHTML = localStorage.getItem("data");
}
getData();