import * as React from 'react';
import ES from './EmptySpace';
const TodoItem = (props) => {

    const {text, done, id} = props;
    
    return (
        <li style={ {marginTop: '10px'} }>
            <span>{id}</span>
            <ES  />
            <span>{text}</span>
            <ES />
            <span style={{fontSize: '10px'}}>{done ? 'Done': 'Due'}</span>
            <ES />
            
            <span><button>{done ? 'Delete' : 'Done' }</button></span>
        </li>
    )
};

export default TodoItem;