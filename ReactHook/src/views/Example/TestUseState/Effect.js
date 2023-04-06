import {React, useState, useEffect} from "react";
import axios from 'axios';

function Effect () {
    const button =["posts","comments","users"]

    const [posts,setData] = useState([])
    const [name, setName] = useState('comments')
    
    // useEffect(() => {
    //     axios.get(`https://api.github.com/users/mojombo`).then((res) => {
    //         console.log(res.data)
    //         setData(res.data)
    //     })
    // },[]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${name}`)
        .then(res => res.json())
        .then(post => {
            setData(post)
        })
    },[name])

    return (
        <div>
            { button &&
                button.map((button) =>{
                    return (
                        <button key={button} onClick={() => setName(button)}>
                            {button}
                        </button>
                    )
                })
            }
            <ul>
                {posts &&
                posts.map((post) => {
                    if (!post.title ) {                         
                        return (
                            <li key={post.id}> {post.name}</li>
                        )
                    } else {
                        return (
                            <li key={post.id}> {post.title}</li>
                        )
                    }
                    // {!post.title ?                         
                    // return (
                    //     <li key={post.id}> {post.name}</li>
                    // )
                    // :
                    // return (
                    //     <li key={post.id}> {post.title}</li>
                    // )
                    // }
                }
                )}
            </ul>
        </div>
    )
}


export default Effect