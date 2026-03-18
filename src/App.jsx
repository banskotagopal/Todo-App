import { useEffect, useState } from 'react'
import Item from './Components/Item'
import Tasks from './Components/Tasks'

function App() {

  const [copyTask,setCopyTask] = useState(() => {
    const saved = localStorage.getItem("setItem")
    return saved ? JSON.parse(saved) : []
  })


    useEffect(() =>{
       localStorage.setItem('setItem', JSON.stringify(copyTask))
  }, [copyTask])

  function Handelete(index)
  {
    const copyDelete = [...copyTask]
    copyDelete.splice(index ,1)
    setCopyTask(copyDelete)

    
  }

   return <div>
    <center>
      <h1>Todo App</h1>
      <Item setCopyTask={setCopyTask} />
      <h2>Added Task Shows Here,</h2>
      <Tasks copyTask = {copyTask} onDelete= {Handelete} />
    </center>
   </div>  
}

export default App
