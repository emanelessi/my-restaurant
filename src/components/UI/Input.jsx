import classes from "./Css/Input.module.css";
import {forwardRef} from "react";

const Input =forwardRef((props,ref)=>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={ref} {...props} />
        </div>
    );
});

export default Input;