import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../Actions/TodoActions";
import {addAsync} from "../Actions/TodoActions";
import Button from "@material-ui/core/es/Button/Button";

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div className='add-todo-form'>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}
            >
                <input className='todo-input-field'
                    ref={node => {
                        input = node
                    }}
                />
                <Button variant='contained' color='primary' type="submit" className='add-todo-button'>Add Todo</Button>
            </form>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo;