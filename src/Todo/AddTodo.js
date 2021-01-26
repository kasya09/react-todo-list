import React, {useState} from "react";
import PropTypes from "prop-types"

function AddTodo({onCreate}){
    const styles = {
        form: {
            marginBottom: '1rem',
        }
    }
    const [value, setValue] = useState('')
    function submitHandler(event){
        event.preventDefault()

        if(value.trim()){
            onCreate(value)
            setValue('')
        }
    }
    return(
        <form style={styles.form} onSubmit={submitHandler}>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <button type={"submit"}>Add</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
