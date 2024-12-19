import classes from "./Css/Input.module.css";

export default function Input(props){
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props} />
        </div>
    )
}