
import './App.css';
import {useState} from "react";
import {Task} from "./User";
//jsx mixing javascript and html together
// a component is just a funtion which returns some sort of UI , here the App is a component
function App() {
    const [todoList,setTodoList] = useState([]);
    const [newTask,setNewTask] = useState("");
    const [deleteTask,setDeleteTask] = useState("");
    const [changeColor,setChangeColor] = useState("black");
    // const addNewTask =()=>{
    //   const newTodoList = [...todoList,newTask];
    //   return setTodoList(newTodoLisnewt);
    // };
    const newdeleteTask=(id)=>{
      const newToDoList=todoList.filter((task1)=>{
        return id!==task1.id;
      })
      return setTodoList(newToDoList);
    };
    const addTask = ()=>{
        const newnewTask = {
          id : (todoList.length === 0)? 1 : todoList[todoList.length-1].id+1,
          taskName :newTask,
          isCompleted : false,
        };
        return setTodoList([...todoList,newnewTask]);
    };
    const completeTask = (id)=>{
      setTodoList(todoList.map((task)=>{
          if(task.id === id)
            return {...task,isCompleted: true}; // change or reformatt a array based on condition , here for 
          //condition is true , isCompleted is changed to true while everthing remains the same 
          else
            return task;
      }))
  };
    const newChangeColor =() =>{
        return setChangeColor("Red");
    };
  return (
    <div className="App">
        <div className="addTask">
        <input type="text" onChange={(event)=>{
          return setNewTask(event.target.value);
        }}/>
        <button onClick={addTask}>Add Task</button>
        </div>
        
        <div className="list">
          {todoList.map((task)=>{
            return <Task taskName={task.taskName} id={task.id} isCompleted={task.isCompleted} deleteTask={newdeleteTask} completedTask={completeTask}/>
          })}
        </div>
      </div>
  );
}; 
  //component

  // Component always starts with a capital letter
  // prop is jst an object that exist in argument of component
  // const GetNameComponent=(props) =>{
  //   return(
  //     <div>
  //       <h1>{props.name}</h1>
  //       <h1>{props.age}</h1>
  //     </div>
  //   );
  // }

  // const JobInformation=(props)=>{
  //   return(
  //     <div>
  //       <h1>{props.salary}</h1>
  //       <h1>{props.position}</h1>
  //       <h1>{props.company}</h1>
  //     </div>
  //   );
  // }

export default App;
