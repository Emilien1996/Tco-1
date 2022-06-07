const initialState = {
    task: []
}
const taskReducer = (state = initialState, action){
    switch (action.type) {
        case "SET_TASK":
            return {
                ...state,
                task: action.payload
            }
        case "REMOVE_MULTIPLE_TASK":
            const deletedTaskId = action.payload
            const task = state.task.filter(task => !deletedTaskId.includes(task._id))

    }
}