function Button(props){
    return (
        <button className="btn btn-primary" onClick={props.eventhandler} disabled={props.disabled}>{props.children}</button>
    )
}

export default Button;