import {connect} from 'react-redux'
import TodoList from '../Components/TodoList'
import {toggleTodo} from "../Actions/TodoActions";
import {deleteTodo} from "../Actions/TodoActions";

const mapStateToProps = state => ({
    todos: state.todos.todos,
    loading: state.todos.loading
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
});

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoListContainer

