import React, { useState } from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";


const MyComponent = () => {
    const [infors,setInfors] = useState([           
        {id: "123", title: "ENGINEER" , salary:"1000"},
        {id: "122", title: "DEV" , salary:"1111"},
        {id: "121", title: "TEST" , salary:"2222"}
    ])

    const addNewJobs = (job) => {
        setInfors([...infors,job])
    }

    const deleteNewJob = (job) => {
        let arrayJob = infors;
        arrayJob = arrayJob.filter(item => item.id !== job.id);
        setInfors(arrayJob);
    }
    return (
        <>
        <AddComponent 
        addNewJobs ={addNewJobs}
        />

        <ChildComponent 
            infors = {infors}
            deleteNewJob = {deleteNewJob}
        />
        </>
    )

}

export default MyComponent;