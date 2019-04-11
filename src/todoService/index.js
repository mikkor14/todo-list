const ERROR_NOT_FOUND = 'Rejected: The todo could not be found';
const ERROR_NOT_VALID = 'Rejected: The todo is not valid'

const validateTodo = (todo) => {
    var keys = ['title', 'completed'];
    return keys.map(key => key in todo).reduce((a, b) => a && b);
}

const sleep = () => {
    const maxSleepMs = 1000;
    return new Promise((resolve) => setTimeout(resolve, Math.random() * maxSleepMs));
}

let mockedTodos = [
    {'id': 0, title: 'Buy ice cream', completed: false },
    {'id': 1, title: 'Buy rain coat', completed: false },
    {'id': 2, title: 'Eat ice cream in rain', completed: false },
];

class TodoService {

    getTodoById(id) {
        return sleep().then(() => {
            const todoIndex = mockedTodos.findIndex(todo => todo.id === id);
            if (todoIndex < 0) {
                return Promise.reject(ERROR_NOT_FOUND);
            }
            const todo = mockedTodos.find(todo => todo.id === id);
            return Promise.resolve(todo);
        });
    }
    
    getTodos() {
        return sleep().then(() => {
            return Promise.resolve(mockedTodos);
        });
    }

    toggleTodo(todoId) {
        return sleep().then(() => {
            const todoIndex = mockedTodos.findIndex(t => t.id === todoId);
            if (todoIndex < 0) {
                return Promise.reject(ERROR_NOT_FOUND);
            }
            const updatedTodo = { ...mockedTodos[todoIndex], completed: !mockedTodos[todoIndex].completed }
            mockedTodos[todoIndex] = updatedTodo;
            return Promise.resolve(updatedTodo);
        });
    }

    addTodo(todo) {
        return sleep().then(() => {
            const valid = validateTodo(todo);
            if (!valid) {
                return Promise.reject(ERROR_NOT_VALID)
            }
            const id = Math.max(...mockedTodos.map(t => t.id)) + 1;
            const createdTodo = { ...todo, id };

            if(mockedTodos.length <= 0){
                createdTodo.id = 0;
            }

            mockedTodos = [...mockedTodos, createdTodo];
            return Promise.resolve(createdTodo);
        });
    }

    deleteTodo(id) {
        return sleep().then(() => {
            const todoIndex = mockedTodos.findIndex(todo => todo.id === id);
            if (todoIndex < 0) {
                return Promise.reject(ERROR_NOT_FOUND);
            }
            mockedTodos = mockedTodos.filter(todo => todo.id !== id);
            return Promise.resolve();
        });
    }
}

export default new TodoService();

