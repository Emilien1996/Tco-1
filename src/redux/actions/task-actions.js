export const setTasksAction = (task) => {
	return {
		type: "SET_TASK",
		payload:task
	}
}
export const removeMultipleTasksAction = (taskIds) => {
	return {
		type:"REMOVE_MULTIPLE_TASK",
		payload:taskIds
	}
}
export const addNewTaskAction = (newTask) => {
	return {
		type:'ADD_NEW_TASK',
		payload:newTask
	}
}
export const getTaskThunk = (query) => (dispatch,getState) => {
	fetch(`http://localhost:3001/task${query ? `?${query}` : ""}`)
	.then(res => res.json())
	.then(data => {
		dispatch(setTasksAction(data))
	})
}
export const addNewTaskThunk = (toggle,formData) => (dispatch,getState) => {
	fetch('http://localhost:3001/task',{
		method: "POST",
		headers:{
			"Content-Type": 'application/json',
		},
		body:JSON.stringify(formData)
	})
	.then(res => res.json())
	.then(data => {
		dispatch(addNewTaskAction(data))
		toggle()
	})
}
export const removeMultipleTaskThunk = (batchDelTasks) => (dispatch,getState) => {
	fetch('http://localhost:3001/task',{
		method: "PATCH",
		headers:{
			"Content-Type": 'application/json',
		},
		body:JSON.stringify({
			tasks:batchDelTasks
		})
	})
	.then(res=> res.json())
	.then(data => {
		dispatch(removeMultipleTasksAction(batchDelTasks))
	})
}
