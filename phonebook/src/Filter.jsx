import React from 'react';

const Filter = (props) => (
    <div>
        filter shown with:
        <input value={props.findNames} onChange={props.handleFindNameChange} />
    </div>
);

export default Filter;