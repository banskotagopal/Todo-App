function Tasks({ copyTask , onDelete })
{

    return (
        <>
        {copyTask.map((task, index) => (
            <div className="tasks" key={index}>
     <div className="name">
                   <input type="checkbox" />
  <h3 className="h3">{task.name}</h3>
                </div>
                <h3>{task.date}</h3>
                
                <div className="btn1">
                    <button onClick={() =>{   
                        onDelete(index)    
                    }} className="delete">Delete</button>
                </div>
            </div>
        ))}
        </>
    )
}

export default Tasks;