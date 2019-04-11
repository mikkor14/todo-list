import TodoService from '../todoService/index'

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

export const LOADING = 'LOADING';
export const DONE_LOADING = 'DONE_LOADING';
export const ERROR = 'ERROR';

export const fetchTodos = () => {
    return dispatch => {
        dispatch({
            type: LOADING,
            payload: true
        });
        TodoService.getTodos().then((data) => {
            dispatch({
                type: FETCH_TODOS,
                payload: {data: data, loading: false}
            });
            dispatch({
                type: DONE_LOADING,
                payload: false
            })
        })
    }
};

export const addTodo = title => {
    const todo = {
        title: title,
        completed: false,
    };
    return dispatch => {
        dispatch({
            type: LOADING,
            payload: true
        });
        TodoService.addTodo(todo).then((createdTodo) => {
            dispatch({
                type: ADD_TODO,
                payload: createdTodo
            });
            dispatch({
                type: DONE_LOADING,
                payload: false
            })
        }).catch((error) => {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        })
    }
};

export const deleteTodo = todoId => {
    return dispatch => {
        dispatch({
            type: LOADING,
            payload: true
        });
        TodoService.deleteTodo(todoId).catch((error) => {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        });
        dispatch({
            type: REMOVE_TODO,
            payload: {id: todoId}
        })
        dispatch({
            type: DONE_LOADING,
            payload: false
        })
    }
};

export const toggleTodo = todoId => {
    return dispatch => {
        dispatch({
            type: LOADING,
            payload: true
        });
        TodoService.toggleTodo(todoId).then((createdTodo) => {
            dispatch({
                type: TOGGLE_TODO,
                payload: createdTodo
            })
            dispatch({
                type: DONE_LOADING,
                payload: false
            })
        }).catch((error) => {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        })
    }
};


