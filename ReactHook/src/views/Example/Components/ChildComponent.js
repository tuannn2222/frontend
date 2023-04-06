import React, {useState} from "react";

const ChildComponent = (props) => {

    const [showJobs,setShowJobs] = useState(false)

    const handleShowHide = () => {
        setShowJobs(!showJobs)
    }

    const handleDeleteNewJob = (job) => {
        console.log("----" , job)
        props.deleteNewJob(job)
    }
    
    let {infors} = props;
    return (
        <>
            { 
            showJobs === false?
                <div>
                    <button onClick={handleShowHide}>Show</button>
                </div> 
            :
                <div>
                    <div className="job-lists">
                    {
                        infors.map((item) =>{
                            return (
                                <div key={item.id}>
                                    {item.title} -{item.salary} <><span onClick={() => handleDeleteNewJob(item)}>x</span></>
                                </div>
                            )   
                        })
                    }
                    </div>
                    <div>
                        <button onClick={handleShowHide} >Hide</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ChildComponent;