import React, {useEffect, useState} from "react";

const AddComponent = (props) => {

    const [title,setTitle] = useState("")
    const [salary,setSalary] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        // validate infor
        if (!title || !salary){
            alert("Missing input")
            return;
        }    
        
        props.addNewJobs({
            id: Math.floor(Math.random() * 1001),
            title:title,
            salary:salary
        })

        setTitle("")
        setSalary("")
    }


    return (
        <>
            <div className="first">
                <label htmlFor="title">Name: </label>
                <input name = "title"  value = {title} type = "text" onChange={(event) => {setTitle(event.target.value)}} />
            </div>
            <div> 
                <label htmlFor="salary">Age :  </label>
                <input name = "salary" value ={salary} type = "text" onChange={(event) => {setSalary(event.target.value)}}/>
            </div>
            <div>
                <button type="submit" onClick={(event) => handleClick(event)}>Submit</button>
            </div>
        </>
    )
    
}

export default AddComponent;


