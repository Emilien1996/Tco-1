const initialState = {
    task: []
}
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TASK": {
            return {
                ...state,
                task: action.payload
            }
        }

        case "REMOVE_MULTIPLE_TASK": {
            const deletedTaskId = action.payload
            const tasks = state.task.filter(task => !deletedTaskId.includes(task._id))
            return {
                ...state,
                tasks
            }
        }

        case "ADD_NEW_TASK": {
            const newTask = action.payload
            const tasks = [...state.task, newTask]
            return {
                ...state,
                tasks
            }
        }
        default:
            return state
    }
}