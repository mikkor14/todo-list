import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Loader from 'react-loader-spinner'


const TodoList = ({todos, toggleTodo, deleteTodo, loading}) => (
    <div className='todo-list'>
        <div className='loader-div' style={{visibility: loading ? 'visible' : 'hidden'}}>
            <Loader
                type="Watch"
                color="green"
                height="30"
                width="30"
            />
        </div>
        <ul>
            {todos.map(todo => <Todo key={todo.id} onClick={() => toggleTodo(todo.id)}
                                     deleteFunc={() => deleteTodo(todo.id)} completed={todo.completed}
                                     title={todo.title}/>)}
        </ul>
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,

}

export default TodoList