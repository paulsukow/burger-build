import React from 'react';

import classes from './Input.css';

const input = (props) => {
    const inputClasses = [classes.InputElement]
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }

    let validationErrorMessage = null;
    if (props.invalid && props.touched) {
        validationErrorMessage = <p>Please enter a valid {props.valueType}</p>;
    }

    let inputElement = null;
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ( 'textarea' ):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;        
            break;
        case ( 'select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );        
    break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;           
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>
                {props.label}
            </label>
            {inputElement}
            {validationErrorMessage}
        </div>
    );
};

export default input;