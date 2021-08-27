import React from 'react';
import './TodoItem.css'

export function TodoItem(props){
    const deleteHandler = () => {
        props.onDelete(props.id);
    }
    return(
        <li className='todoItem' onClick={deleteHandler}>{props.item}</li>
    )
}
