import { useState } from "react";

function Item( {setCopyTask} )
{

    const [taskName,taskNameSet] = useState("");
    const [taskDate,taskDateSet] = useState("");
    const [task,setTask] = useState([])

    function Additem(e)
    {
        e.preventDefault();
       if(taskName === "" || taskDate === ""){
         return alert("Cannot added Empty Task!")
       }
       const newTask = {
            name : taskName,
            date : taskDate
       }
   const updatedTasks =(prev => [...prev, newTask])

    setTask(updatedTasks)
    setCopyTask(updatedTasks)
      taskNameSet("")
      taskDateSet("")
    }

    return <>
    <div className="input-items">
        <form onSubmit={(e) =>{
            Additem(e)
        }}>
        <input value={taskName} type="text" onChange={(e) =>{
            taskNameSet(e.target.value)
        }} placeholder="Task Name"  required/>
       <input value={taskDate} onChange={(e) =>{
          taskDateSet(e.target.value)
       }} type="date" />
       <div className="btn">
        <button className="add">Add Task</button>
       </div>
        </form>
    </div>
    </>
}

export default Item;