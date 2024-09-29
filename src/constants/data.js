export const cards = {

    tasks: {
        "task-1": {
        id: "task-1",
        title: "Task 1",
        descp: "Task descp",
        
        },
        "task-2": {
            id: "task-2",
            title: "Task 2",
            descp: "Task descp",
            
        },
        "task-3": {
            id: "task-3",
            title: "Task 3",
            descp: "Task descp",
            
        },
        "task-4":{
            id: "task-4",
            title: "Task 4",
            descp: "Task descp",
            
        },
        "task-5":{
            id: "5",
            title: "Task 5",
            descp: "Task descp",
            
        },
    },  
    columns: {
        "col-1": {
            id: "col-1",
            title: "To do",
            taskIds: ["task-1", "task-2"]
        },

        "col-2": {
            id: "col-2",
            title: "InProgress",
            taskIds: ["task-3"]
        },

        "col-3": {
            id: "col-3",
            title: "Done",
            taskIds: ["task-4"]
        },
    },
    columnOrder: ["col-1", "col-2", "col-3"]

};