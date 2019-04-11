import { combineReducers} from "redux";
import TodoReducer from './TodoReducer'

const AppReducer = combineReducers({
    todos: TodoReducer,
});

export default AppReducer;