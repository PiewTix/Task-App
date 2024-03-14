
const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get('id');



fetch(`/tasks/id/${taskId}`)
    .then(response => response.json())
    .then(task => {
        // Update task details on the page
        document.getElementById('taskDescription').textContent = task.description;
        document.getElementById('taskProgress').value = task.progress
    })
    .catch(error => console.error('Error fetching task details:', error));



function handleEditButtonClick() {
    let description = document.getElementById('taskDescription').value
    let progress = document.getElementById('taskProgress').value

    const requestBody = {
        "description": description,
        "progress": progress
    };
    console.log(JSON.stringify(requestBody))
    // Send PUT request to update task
    fetch(`/tasks/id/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (response.ok) {
                console.log(response.statusText)
                window.location.href = '/todo-list.html';
            } else {
                console.error('Failed to update task:', response.statusText);
            }
        })
        .catch(error => console.error('Error updating task:', error));

    //window.location.href = '/';
}

// Function to handle delete button click
function handleDeleteButtonClick(taskId) {

    // had no time left to implement delete button route
    /*
    if (confirm('Are you sure you want to delete this task?')) {
        // Perform deletion (replace with your delete logic)
        fetch(`/tasks/${taskId}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    // Redirect to home page or another suitable page after deletion
                    window.location.href = '/';
                } else {
                    console.error('Failed to delete task:', response.statusText);
                }
            })
            .catch(error => console.error('Error deleting task:', error));
    }

     */
}

// Event listener for edit button click
document.getElementById('editButton').addEventListener('click', handleEditButtonClick);

// Event listener for delete button click
document.getElementById('deleteButton').addEventListener('click', () => {
     // Replace with the actual task ID
    handleDeleteButtonClick(taskId);
});

