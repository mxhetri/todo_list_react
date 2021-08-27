import React from 'react';
import './Button.css'

export function Button(props){
    return(
        <button className='button' type={props.type}>
            {props.children}
        </button>
    )
}