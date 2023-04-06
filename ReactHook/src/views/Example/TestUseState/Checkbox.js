import {React, useState} from "react"


const Checkbox = () => {

    const json = [
        {
            id: 1,
            text: "javascript"
        },
        {
            id: 2,
            text: "java"
        },
        {
            id: 3,
            text: "React"
        }
    ]
    
    const [check,setCheck] = useState([])


    const handleCheck = (id) => {
        setCheck((prev) => {
            const isChecked = check.includes(id)
            if (isChecked) {
                return check.filter(item => item !==id)
            }
            else {
                return  [...prev,id]
            }
        })
    }
    const handleClick = () => {
        alert(check)
    }

    return (
        <div>
            { json &&
                json.map(node => {
                    return (
                        <div key={node.id}>
                            <input 
                                type="checkbox"
                                checked ={check.includes(node.id)}
                                onChange={() => handleCheck(node.id)}
                            />
                            {node.text}
                        </div>
                    )
                })
            }
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default Checkbox