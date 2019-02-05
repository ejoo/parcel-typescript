import * as React from 'react';
import ES from './EmptySpace';
const TodoItem = (props) => {

    const {text, done, id, onDelete} = props;
    
    return (
        <li style={ {marginTop: '10px'} }>
            <span>{id}</span>{ ' '}
            <span>{text}</span>{' '}
            { ' '}
            <span style={{fontSize: '10px'}}>{done ? 'Done': 'Due'}</span>
            {' '}
            {
                
            }
            <span><button onClick={!done ? () => null : () => onDelete(id)}>{done ? 'Delete' : 'Done' }</button></span>
        </li>
    )
};

export default TodoItem;