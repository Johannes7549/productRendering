function Button(props){
    return (
        <button className="btn btn-primary" onClick={props.eventhandler} >{props.children}</button>
    )
}

export default Button;