import React from 'react';
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    LOADING, DONE_LOADING
} from "../Actions/TodoActions";

import TodoReducer from './TodoReducer'

describe('TodoReducer', () => {
   it('should initialize default state', () => {
       const INITIAL_STATE = {
           todos: [], loading: false
       }
       expect(TodoReducer(undefined, {})).toEqual(INITIAL_STATE);

   })

   it('should prosess LOADING and DONE_LOADING actions', () => {

       const loading = true;
       const done = false;
       const actionLoad = {
           type: LOADING,
           payload: {value: loading}
       };
       const actionDone = {
           type: DONE_LOADING,
           payload: {value: done}
       };

       expect(TodoReducer(undefined, actionLoad)).toEqual({
           todos: [], loading: true,
       });

       expect(TodoReducer(undefined, actionDone)).toEqual({
           todos: [], loading: false,
       });

   })

    it('should prosess ADD_TODO action', () => {

        const testTodo = {
            title: "Learn Redux in 2 days",
            id: 2,
            completed: false
        };

        const action = {
            type: ADD_TODO,
            payload: testTodo,
        };

        expect(TodoReducer(undefined, action)).toEqual({
            todos: [
                {
                    title: 'Learn Redux in 2 days',
                    id: expect.any(Number),
                    completed: false,
                },
            ], loading: false
        });
    });

    it('should prosess REMOVE_TODO action', () => {

        const testTodoId = 1;
        const state = { todos: [{'id': 0, title: 'Buy ice cream', completed: false },
                {'id': 1, title: 'Buy rain coat', completed: false }]};

        const action = {
            type: REMOVE_TODO,
            payload: {id: testTodoId},
        };

        expect(TodoReducer(state, action)).toEqual({
            todos:[{'id': 0, title: 'Buy ice cream', completed: false }]
        });

    });

    it('should prosess TOGGLE_TODO action', () => {

        const testTodo = {'id': 1, title: 'Buy rain coat', completed: true };
        const state = { todos: [{'id': 0, title: 'Buy ice cream', completed: false },
                {'id': 1, title: 'Buy rain coat', completed: false }]};

        const action = {
            type: TOGGLE_TODO,
            payload: testTodo,
        };

        expect(TodoReducer(state, action)).toEqual({
            todos:[{'id': 0, title: 'Buy ice cream', completed: false },
                {'id': 1, title: 'Buy rain coat', completed: true }]
        });
    });
});