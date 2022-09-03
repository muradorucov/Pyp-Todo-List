var toDoInput = document.querySelector("#todo-input");
var addBtn = document.querySelector("#add-button");
var saveBtn = document.querySelector("#save-button");
var toDoList = document.querySelector("#todo-list");

var todDoArr = [];

addBtn.addEventListener('click', (e) => {

    if (!toDoInput.value.trim() == '') {
        var toDoItem = document.createElement("li");
        var toDoDesc = document.createElement("h2");
        var toDoActions = document.createElement("span");
        var deleteBtn = document.createElement("button");
        var editBtn = document.createElement("button");

        deleteBtn.classList.add("delete-button");

        toDoList.appendChild(toDoItem);
        toDoItem.appendChild(toDoDesc);
        toDoItem.appendChild(toDoActions);
        toDoActions.appendChild(editBtn);
        toDoActions.appendChild(deleteBtn);

        todDoArr.push({
            id: Math.floor(Math.random() * 100).toString(),
            title: toDoInput.value.trim(),
        });
        todDoArr.forEach((item) => {
            toDoItem.setAttribute('id', item.id)
            toDoDesc.innerHTML = item.title;
            toDoInput.value = '';
        })




        editBtn.innerHTML = 'Edit';
        deleteBtn.innerHTML = 'X';


        editBtn.addEventListener('click', () => {
            toDoInput.value = toDoDesc.innerHTML;
            saveBtn.style.display = 'inline-block';
            addBtn.style.display = 'none';

            saveBtn.addEventListener('click', () => {
                saveBtn.style.display = 'none';
                addBtn.style.display = 'inline-block';
                toDoDesc.innerText = toDoInput.value;
            })
        })

        deleteBtn.addEventListener('click', () => {
            toDoItem.remove()
        })

    }



})

