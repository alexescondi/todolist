import React, { useState } from 'react';

function Item(props) {
    const [done, setDone] = useState(props.done);

    function toggleDone() {
        setDone(!done);
    }

    return(
        <div className={done ? "Item-done" : ''} onClick={toggleDone}>
            <p>{props.text}</p>
        </div>
    );
}

export default Item;
