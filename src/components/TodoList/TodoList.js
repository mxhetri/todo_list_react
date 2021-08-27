import React from "react";
import './TodoList.css';
import {TodoItem} from "../TodoItem/TodoItem";

export function TodoList(props) {
    return (
        <ul className='todo-list'>
            {props.items.map(item => {
                return (
                    <TodoItem key={item.id}
                              item={item.text}
                              id={item.id}
                              onDelete={props.onDeleteItem}
                    />
                )
            })}
        </ul>
    )
}