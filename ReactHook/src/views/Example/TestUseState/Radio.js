import {React, useState} from "react"


const Radio = () => {
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
            text: "ReactJS"
        }
    ]
    const [checked,setData] = useState(1);
    
    const handleSubmit = () => {
        console.log({id: checked});
    }

    return (
        <>  
            <div>
                {json&&
                    json.map(node => {
                        return (
                            <div key={node.id}>
                                <input type="radio"
                                checked = {checked === node.id}
                                onChange={() => setData(node.id)}
                                /> 
                                {node.text}
                            </div>
                        )
                    })
                }
                <button onClick={handleSubmit}>Click me!</button>
            </div>
        </>
    )
}

export default Radio