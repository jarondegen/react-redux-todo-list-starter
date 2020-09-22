import React from 'react';
import Task from './Task';
// TODO: Import the application's Redux store instance
// TODO: Import the `deleteTask` action creator function
import store from '../store';
import { deleteTask, resetTaskList } from '../actions/taskActions';


class TodoList extends React.Component {
  componentDidMount() {
    // TODO: Use `store.subscribe` to force an update when the state changes
    // TODO: Name the subscription as `this.unsubscribe`
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    // TODO: Check if `this.unsubscribe` is defined
    // TODO: If its defined, invoke `this.unsubscribe`
    if (this.unsubscribe) {
      this.unsubscribe();
    };
  }

  deleteTask = (id) => {
    store.dispatch(deleteTask(id));
    // TODO: Invoke `deleteTask` based on an `id` input
    //       and dispatch a 'DELETE_TASK' action
  }

  resetTaskList = () => {
    store.dispatch(resetTaskList());
  }

  render() {
    // TODO: Get the tasks stored in state with the `getState` method
    // TODO: Use debugger to view state
    const tasksState = store.getState();
    const tasksStateArr = Object.keys(tasksState)

    // TODO: If there are no tasks stored in state, return `null`.
    if (tasksState.length === 0) {
      return null;
    }
    return (
      <>
        <ul>
        {tasksStateArr.map(task =>
            <Task key={tasksState[task].id}
            task={tasksState[task]}
            deleteTask={this.deleteTask}/>
          )}
        </ul>
        <button onClick={this.resetTaskList}>Reset todo list</button>
      </>
    );
  }
}

export default TodoList;
