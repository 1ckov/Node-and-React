import './App.css';
import {useState} from "react";
import { Button } from './components/Button/button.component'
import { TaskListItem } from './components/TaskListItem/tasklistitem.component'
const appName = "To Do App"


function App() {
  const [currentText, setCurrentText] = useState("")
  const [tasks, setTasks] = useState([])

  
  const onClickAddTask = () => {
    if(currentText!==""){
    setTasks( [...tasks,currentText])
    }else{
      alert("Please add Text :)")
    }
  }
  const onClickRemoveTask = (index) => {
    tasks.splice(index, 1)
    setTasks([...tasks])
  }

  const onChangeInput = (e) => {
    console.log(e.target.value);
    setCurrentText(e.target.value);
  }

  return (
    <div className="App">
      <h1>{appName}</h1>
      <div>
        <input onChange={onChangeInput}></input>
        <Button onClick={onClickAddTask}>ADD</Button>
      </div>
      <ol id="list">
        {
          tasks.map((task,i) => 
            {
              return (
                <TaskListItem text={task}  onDelete = { () => onClickRemoveTask(i)} />
              )
            }
          ) 
        }
      </ol>
    </div>

  );
}



export default App;
