const Button = ({text, doSomething}) =>{
    return(
        <button className={"Button"} onClick={doSomething}>
            {text}
        </button>
    )
}
export default Button