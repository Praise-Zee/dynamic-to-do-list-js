// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');


    // Function to add a new task
    function addTask() {
        // Get the trimmed input value
        const taskText = taskInput.value.trim();


        // Check if input is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }


        // Create a new list item (li) element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;


        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';


        // Event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };


        // Append remove button to list item
        listItem.appendChild(removeButton);


        // Append list item to task list
        taskList.appendChild(listItem);


        // Clear input field
        taskInput.value = '';
    }


    // Add event listener for "Add Task" button
    addButton.addEventListener('click', addTask);


    // Add event listener for pressing "Enter" in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
