import React, {useState} from 'react';
import {Button} from "../UI/Button/Button";
import './TodoInput.css'

export function TodoInput(props){
    const [inputTodo, setInputTodo] = useState('');

    const todoInputChangeHandler = (event) => {
        setInputTodo(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddTodo(inputTodo);
        setInputTodo('');
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className='form-control'>
                <label>Todo Item </label>
                <input type='text' value={inputTodo} onChange={todoInputChangeHandler}/>
            </div>
            <Button type='submit'>Add Goal</Button>
        </form>
    )
}