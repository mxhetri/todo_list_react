import './App.css';
import {TodoInput} from "./components/TodoInput/TodoInput";
import {useState} from "react";
import {TodoList} from "./components/TodoList/TodoList";

function App() {

    const [todoItems, setTodoItems] = useState([
        {text: 'do all exercise', id: 'i1'},
        {text: 'finish the course', id: 'i2'}
    ]);

    const addTodoHandler = (inputItem) => {
        setTodoItems(prevTodos => {
            const updatedTodos = [...prevTodos];
            updatedTodos.unshift({
                text: inputItem,
                id: Math.random().toString()
            });
            console.log('todo items are', updatedTodos);
            return updatedTodos;
        })
    }

    const  deleteItemHandler = (itemId) => {
        setTodoItems(prevTodos => {
            const updatedTodos = prevTodos.filter(todo =>
                todo.id !== itemId);
            return updatedTodos;
        });

    }
    return (
        <div>
            <section id='todo-form'>
                <TodoInput onAddTodo={addTodoHandler}/>
            </section>
            <section id='todos'>
                {todoItems.length === 0 ? <p>No Todo items found</p>
                    :<TodoList items={todoItems} onDeleteItem={deleteItemHandler}/>}
            </section>
        </div>
    );
}

export default App;
