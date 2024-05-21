const todoListID_1 = "dj2455-el5785-01"
const todoListID_2 = "dj2455-el5785-02"

const todoLists = [
    {
        id: todoListID_1,
        title: "what to learn",
        filter: "all",
        // tasks: [
        //     // {id: 1, title: "html/css", isDone: false},
        //     // {id: 2, title: "js", isDone: false },
        //     // {id: 3, title: "react", isDone: true},
        // ]
    },
    {
        id: todoListID_2,
        title: "what to buy",
        filter: "all",
        // tasks: [
        //     // {id: 1, title: "bread", isDone: false},
        //     // {id: 2, title: "books", isDone: true},
        //     // {id: 3, title: "milk", isDone: false},
        // ]
    },

];

// const tasks = [
//     {todoListID: "1", id: 3, title: "html/css", isDone: false},
//     {todoListID: "1", id: 4, title: "js", isDone: false },
//     {todoListID: "1", id: 5, title: "react", isDone: true},
//
//     {todoListID: "2", id: 6, title: "bread", isDone: false},
//     {todoListID: "2", id: 7, title: "books", isDone: true},
//     {todoListID: "2", id: 8, title: "milk", isDone: false},
// ];

const tasks = {
    [todoListID_1]: [
        {id: 3, title: "html/css", isDone: false},
        {id: 4, title: "js", isDone: false},
        {id: 5, title: "react", isDone: true},
    ],
    [todoListID_2]: [
        {id: 6, title: "bread", isDone: false},
        {id: 7, title: "books", isDone: true},
        {id: 8, title: "milk", isDone: false},
    ],
}

console.log(tasks);

const addTodoList = (title) => {
    const tlID = crypto.randomUUID();
    const newTodoList = {
        id: tlID,
        title: title,
        filter: "all",
    };
    // pass to setState:
    const nextTodosState = [...todoLists, newTodoList];
    const nextTasksState = {...tasks, [tlID]: []};
}

const removeTodoList = (id) => {
    // pass to setState:
    const nextTodosState = todoLists.filter(tl = tl.id !== id);
    const copyTasksState = {...tasks};
    delete copyTasksState[id];
    // pass to setState:
    const nextTasksState = copyTasksState;
}

const addTask = (taskTitle, todolistID) => {
    const newTask = {
        id: crypto.randomUUID(),
        title: taskTitle,
        isDone: false
    };
    const todoTasks = tasks[todolistID];
    // pass to setState:
    const nextTasksState = {...tasks, [todolistID]: [...todoTasks, newTask]};
}

const changeTaskTitle = (taskID, todolistID, newTitle) => {
    const todoTasks = tasks[todolistID]
        .map(task => task.id === taskID ? {... task, title: newTitle } : task);

    const nextTasksState = {
        ...tasks,
        [todolistID]: todoTasks
    }
}