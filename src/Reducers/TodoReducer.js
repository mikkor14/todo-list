import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    FETCH_TODOS
    ,LOADING, DONE_LOADING, ERROR
} from "../Actions/TodoActions";

const INITIAL_STATE = {
    todos: [], loading: false
};

const TodoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR: {
            return console.log(action.payload);
        }
        case LOADING: {
            const loading = true;
            return {...state, loading};
        }
        case DONE_LOADING: {
            const loading = false;
            return {...state, loading};
        }
        case ADD_TODO: {
            const todo = action.payload;
            return {...state, todos: [...state.todos, todo]}
        }
        case REMOVE_TODO: {
            const todos = state.todos.filter(({id}) => id !== action.payload.id);
            return {...state, todos};
        }
        case TOGGLE_TODO: {
            const todos = state.todos;

            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id === action.payload.id) {
                    todos[i].completed = !todos[i].completed;
                }
            }
            return {...state, todos: [...state.todos]}
        }
        case FETCH_TODOS: {
            const todos = action.payload.data;
            return {...state, todos};
        }

        default: {
            return state;
        }
    }
};

export default TodoReducer;