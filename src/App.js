
import { useState } from "react";
import "./App.css";
import Controll from "./components-2/controll";

import FormStudent from "./components-2/formStudent";
import ListStudent from "./components-2/listStudent";

function App() {
  const [toggleForm,setToggleForm] = useState(false);
  const [addStudents,setAddStudents] = useState([]);
  //render con truyền lại cha
  function handleSetdata(student) {
    setAddStudents([...addStudents,student]);
    console.log(student);
  }
  console.log(addStudents);

  function handlehToggle() {
    setToggleForm(!toggleForm); 
  }
  return (
    
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
           <Controll toggle = {handlehToggle}/>
            <ListStudent studens = {addStudents}/>
          </div>
        </div> 
        {toggleForm &&  <FormStudent handleSetdata = {handleSetdata}/>}
      </div>
   
  );
}

export default App;
