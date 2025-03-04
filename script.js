const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task');

addTaskBtn.addEventListener('click', function () {

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.classList.add('checkTask');
    // checkBtn.innerHTML = `<i class="fa-solid fa-check</i>"`;
    task.appendChild(checkBtn);

    let iconAdd = document.createElement('i');
    iconAdd.classList.add('fa-solid', 'fa-check');
    checkBtn.appendChild(iconAdd);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteTask');
    // checkBtn.innerHTML = `<i class="fa-solid fa-trash-can</i>"`;
    task.appendChild(deleteBtn);

    let iconDelete = document.createElement('i');
    iconDelete.classList.add('fa-solid', 'fa-trash-can');
    deleteBtn.appendChild(iconDelete);

    if (inputTask.value === '') {
        alert('Please enter a task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = '';

    checkBtn.addEventListener('click', function () {
        checkBtn.parentElement.style.textDecoration = 'line-through';
    });

    deleteBtn.addEventListener('click', function (e) {

        let target = e.target;

        target.parentElement.parentElement.remove();
    });
});


