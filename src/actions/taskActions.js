// TODO: Define `CREATE_TASK` constant
// TODO: Define `DELETE_TASK` constant

// TODO: Define `createTask` action creator function

// TODO: Define `deleteTask` action creator function

export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const createTask = (taskMessage) => {
    return {
        type: CREATE_TASK,
        taskId: new Date().getTime(),
        taskMessage,
    }
}

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId,
    }
}
