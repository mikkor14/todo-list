import React, {Component} from 'react';
import AddTodo from '../Containers/AddTodo'
import '../App.css';
import TodoListContainer from '../Containers/TodoListContainer'



const App = () => (
    <div className='content'>
        <TodoListContainer/>
        <AddTodo/>
    </div>
);


export default App