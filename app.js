let item = document.querySelector("#item");
let todobox = document.querySelector("#to-do-box");

item.addEventListener("keyup",
    function (event) {
    if (event.key == "Enter") {
        addtodo(this.value);
        this.value = ""
        
    }
})

let addtodo = (item)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
     <i><button id="btn">delete</button></i>
    `;
    listItem.querySelector("i").addEventListener("click",function () {
        listItem.remove()
    })
    todobox.appendChild(listItem)
}