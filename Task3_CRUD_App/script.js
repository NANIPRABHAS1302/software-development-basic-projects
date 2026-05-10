let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function renderTasks(filteredTasks = tasks){

    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";

    if(filteredTasks.length === 0){

        taskList.innerHTML =
            "<p>No tasks available.</p>";

        return;
    }

    filteredTasks.forEach((task,index)=>{

        const taskItem =
            document.createElement("div");

        taskItem.classList.add("task-item");

        taskItem.innerHTML = `

            <div class="task-text ${task.completed ? "completed" : ""}">
                ${task.text}
            </div>

            <div class="task-buttons">

                <button class="complete-btn"
                    onclick="toggleComplete(${index})">

                    ${task.completed ? "Undo" : "Done"}

                </button>

                <button class="edit-btn"
                    onclick="editTask(${index})">

                    Edit

                </button>

                <button class="delete-btn"
                    onclick="deleteTask(${index})">

                    Delete

                </button>

            </div>
        `;

        taskList.appendChild(taskItem);
    });
}

function addTask(){

    const taskInput =
        document.getElementById("taskInput");

    const taskText =
        taskInput.value.trim();

    if(taskText === ""){

        alert("Please enter a task.");

        return;
    }

    tasks.push({
        text:taskText,
        completed:false
    });

    saveTasks();

    renderTasks();

    taskInput.value = "";
}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    renderTasks();
}

function editTask(index){

    const updatedTask =
        prompt(
            "Edit your task:",
            tasks[index].text
        );

    if(updatedTask !== null &&
       updatedTask.trim() !== ""){

        tasks[index].text = updatedTask;

        saveTasks();

        renderTasks();
    }
}

function toggleComplete(index){

    tasks[index].completed =
        !tasks[index].completed;

    saveTasks();

    renderTasks();
}

function searchTasks(){

    const searchValue =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const filteredTasks =
        tasks.filter(task =>
            task.text
            .toLowerCase()
            .includes(searchValue)
        );

    renderTasks(filteredTasks);
}

renderTasks();