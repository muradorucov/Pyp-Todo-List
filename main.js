var toDoInput = document.querySelector("#todo-input");
var addBtn = document.querySelector("#add-button");
var toDoList = document.querySelector("#todo-list");

var todDoArr = [];

addBtn.addEventListener('click', (e) => {

    if (!todDoArr.includes(toDoInput.value) && !toDoInput.value == '') {
        var toDoItem = document.createElement("li");
        var toDoDesc = document.createElement("h2");
        var toDoAction = document.createElement("span");
        var deleteBtn = document.createElement("button");
        var editBtn = document.createElement("button");

        deleteBtn.classList.add("delete-button");

        toDoList.appendChild(toDoItem);
        toDoItem.appendChild(toDoDesc);
        toDoItem.appendChild(toDoAction);
        toDoAction.appendChild(editBtn);
        toDoAction.appendChild(deleteBtn);

q

        toDoDesc.innerHTML = toDoInput.value;
        todDoArr.push(toDoInput.value);
        toDoInput.value = '';

        editBtn.innerHTML = 'Edit';
        deleteBtn.innerHTML = 'X';


        editBtn.addEventListener('click', () => {
            toDoInput.value = toDoDesc.innerHTML;

            addBtn.innerHTML = 'Save';
            addBtn.addEventListener('click', () => {
                addBtn.innerHTML = 'Add'
                toDoItem.remove()
                if (!toDoInput.value == '') {
                    toDoDesc.innerHTML = toDoInput.value;
                    toDoInput.value = '';
                }
            })
        })

        deleteBtn.addEventListener('click', () => {
            toDoItem.remove()
        })

    }


    console.log(todDoArr)

})

