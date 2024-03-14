document.getElementById('editButton').addEventListener('click', createTask);

function createTask() {
    // Get task details from input fields
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const type = document.getElementById('taskType').value;
    const progress = document.getElementById('taskProgress').value;

    // Create task object
    const task = {
        title: title,
        description: description,
        type: type,
        progress: progress
    };

    // Send POST request to create task
    fetch('/tasks/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => {
            if (response.ok) {
                // Task created successfully, redirect to todo-list.html or other suitable page
                window.location.href = '/todo-list.html';
            } else {
                console.error('Failed to create task:', response.statusText);
            }
        })
        .catch(error => console.error('Error creating task:', error));
}