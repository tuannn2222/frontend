import React, {useEffect, useState} from "react";
import AddTest from "./AddTest";
import Output from "./Output";


const Test = () => {
    // const arrayvalue = ["bus", "cycle"] 
   
    const [list, setList] = useState(["bus", "cycle"])


    const addTest = (value) => {
        setList([...list,value])
    }

    const deleteValue = (value) => {
        let array = list
        array= array.filter(item => item !== value) 
        setList(array)
    }

    return (
        <>
            <AddTest addTest ={addTest}/>

            <Output 
                array ={list}
                deleteValue={deleteValue} 
            />
        </>
    )

}

export default Test;