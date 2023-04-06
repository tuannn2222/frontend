import {React, useState} from "react";

const AddTest = (props) => {

    const [value,setValue] = useState();

    const handleCheckbox = () => {
        props.addTest(value)
        setValue("")
    }

    return (
        <> 
            <label > Input</label> 
            <input type="text" onChange={e => {setValue(e.target.value)}}/>
            <button type="submit" onClick={handleCheckbox}>Submit</button>

        </>
    )
}

export default AddTest