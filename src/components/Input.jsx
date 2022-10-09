const Input = (props) => {
const {label, id, type, handleInput } = props

return (
    <div className="input">
        <label htmlFor={id}>
            {label}:
        </label>
        <input type={type} id={id} name={id}  maxLength="45" onChange={(e)=>handleInput(e)} />
    </div>
)
}

export default Input