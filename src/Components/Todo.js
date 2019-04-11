import React,{Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({onClick, completed, title, deleteFunc}) => (
    <div className='todo-element'>
        <li onClick={onClick} style={{
            textDecoration: completed ? 'line-through' : 'none',
            background: completed ? 'lightgreen' : 'none'
        }}>
            {title}
        </li>
        <IconButton className='delete-todo-button' onClick={deleteFunc}>
            <DeleteIcon/>
        </IconButton>
    </div>


);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    deleteFunc: PropTypes.func.isRequired
};

export default Todo;
