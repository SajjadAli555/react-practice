import React,{useState} from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
 const [users,setUsers] = useState([
   {name:"ED" ,message:"Hello There"},
   {name:"Jhon",message:'i am jhon snow'},
   {name:"King",message:"i am awosome"}
 ])
  return (
    <div className="App">
    {users.map(user => (
      <Tweet name={user.name} message={user.message} />
    ))}

    </div> 
  );
}

export default App;
