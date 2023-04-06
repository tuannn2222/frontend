import {React}  from "react";


const Output = (props) => {
    let {array,deleteValue} = props
    const handleDelete = (item) => {
        deleteValue(item)
    }
    
    return (
        <>
            <div>
                {
                    array.map((item,index) => {
                        return (
                            <div key={index}>
                               * {item} <span onClick={() => handleDelete(item)}>x</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}


export default Output