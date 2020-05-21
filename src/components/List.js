import React, { useState } from 'react';
import '../App.css';

import Item from './Item';

function List(props) {  
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([
        {text: 'Wyrzucić śmieci', done: true},
        {text:'Zrobić pranie'},
        {text: 'Kupić pieczywo'},
    ]);

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function addToList() {
        const itemList = items;
        itemList.push({text: inputValue, done: false});
        setItems([...itemList]);
        setInputValue('');
    }

    function submitIfEnter(e) {
        if (e.key === 'Enter') {
            addToList();
        };
        return null;
    }
    
    return(
        <div>
            <h1>{props.title}</h1>
            {items.map(item => <Item text={item.text} done={item.done} />)}
            <input type="text" value={inputValue} onChange={handleChange} onKeyPress={submitIfEnter} />
            <button onClick={addToList}>Dodaj</button>
        </div>
    );
}

export default List;