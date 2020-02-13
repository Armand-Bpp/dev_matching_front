import React from 'react';

const Button = (props) => {
    const classNames = `btn ${props.isSelected ? 'btn-primary' : 'btn-outline-danger'}`
    return (
        <button
            className={classNames}
            onClick={props.onClickFn}>
            {props.children}
        </button>
    );
}

export default Button;