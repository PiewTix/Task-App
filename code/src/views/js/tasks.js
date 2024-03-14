fetch("/tasks/all")
    .then((response) => response.json())
    .then((data) => {

        console.log(data)
        // Clear lists
        document.getElementById("todo-list").innerHTML = "";
        document.getElementById("progress-list").innerHTML = "";
        document.getElementById("done-list").innerHTML = "";

        // Populate lists with tasks
        data.forEach(task => {
            const taskItem = createTaskItem(task);
            if (task.progress === "todo") {
                document.getElementById("todo-list").appendChild(taskItem);
            } else if (task.progress === "in progress") {
                document.getElementById("progress-list").appendChild(taskItem);
            } else if (task.progress === "done") {
                document.getElementById("done-list").appendChild(taskItem);
            }
        });
    })
    .catch(error => {
        console.error("Error fetching tasks:", error);
    });

function createTaskItem(task) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <span>${task.description}</span>
            <div>
                <a href="/todo-item.html?id=${task.id}" class="btn btn-primary btn-sm mx-1">Edit</a>
            </div>
        </div>
    `;
    return li;
}