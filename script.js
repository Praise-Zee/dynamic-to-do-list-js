document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    // Load tasks from localStorage
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];


        savedTasks.forEach(taskText => {
            createTaskItem(taskText);
        });
    }


    // Create and display a task item
    function createTaskItem(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;


        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';


        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            saveTasks();
        };


        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }


    // Save current task list to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            // Remove button is the lastChild, so we only get the task text
            const taskText = li.firstChild.textContent.trim();
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    // Add new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }


        createTaskItem(taskText);
        saveTasks();
        taskInput.value = '';
    }


    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });


    // Load tasks when page loads
    loadTasks();
});
