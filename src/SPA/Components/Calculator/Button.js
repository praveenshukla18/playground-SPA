import React from 'react';

const Button = (props) => {
    return (
        <div type="button" btn-type={props.btnType} onClick= {props.handleClick} value= {props.label}>
            <h2 className="btn-text">{props.label}</h2>
        </div> 
    );
};

export default Button;