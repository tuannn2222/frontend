import {React, useState} from "react";


const TestCount = () => {
    const [count,setCount] = useState(0)

    const handlerCount = () => {
        setCount(count +1)
    }

    return (
        <>
            <div>
                <h1>Count: {count}</h1>
            </div>
            <button onClick={handlerCount}>Click me!</button>
        </>
    )

}

export default TestCount