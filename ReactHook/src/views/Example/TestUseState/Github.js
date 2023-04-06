import {React, useState, useEffect} from "react";
import axios from 'axios';

const Github = () => {
    const [name, setName] = useState();
    const [data,setData] = useState();

    const getValue = async (name) => {
        const result = await axios(`https://api.github.com/users/${name}`)
        setData(result.data)
        console.log(result.data);
    }
    
    const handleGetData= () => {
        console.log(name);
        getValue(name)
    }

    const showData = () => {
        console.log("2222222222222222222");
        return <p1>1111111111</p1>
    }
    return (
        <>
            <div>
                <input type="text" onChange={(event) => setName(event.target.value) }/>
                <button onClick={handleGetData}>Get Data</button>
            </div>
            <div>
            {data&&
                <p1 >{data.url}</p1>
            }
            </div>
        </>

    )

}


export default Github