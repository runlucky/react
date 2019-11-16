import React from 'react'

function NameForm(props) {
    const handler = (e) => {
        props.onChangeName(e.target.value);
    }

    return (
        <div className="form">
            <input type="text"
                value={props.name}
            onChange={handler} />
        </div>
    );
}

export default NameForm;