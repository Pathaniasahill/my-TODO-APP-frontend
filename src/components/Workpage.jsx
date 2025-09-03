import React, { useState, useEffect } from "react";
import List from "./List";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Workpage = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const handledelete=async(id)=>{
        try {
          const res=await fetch("http://localhost:5000/api/deletetask",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({id})
          })
          const data= await res.json();
          if(res.ok){
            alert(data.message)
            await fetchTasks(); // ✅ Re-fetch tasks to update UI
          }else{
            alert("Task is not deleted due to some error. Please try again.")
          }
        } catch (error) {
          console.log("Something went wrong in deleting the task---catch statement got executed", error.message);
        }
    }
 
const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/gettask", {
          method: "POST", // or GET if your backend allows
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: localStorage.getItem("useremail") }),
        });

        const data = await res.json();
        if (res.ok) {
          setTodos(data.task); // assuming backend sends { task: [...] }
        } else {
          console.log("Could not fetch the tasks from the backend");
        }
      } catch (error) {
        alert("Something went wrong in fetching tasks from the backend");
      }
    };
  useEffect(() => {
    fetchTasks(); // ✅ Call the function
  }, []);

  

  // Handle add task
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const task = formdata.get("taskitem");
    const email = localStorage.getItem("useremail");

    try {
      const res = await fetch("http://localhost:5000/api/addtask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, task }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        // ✅ Re-fetch tasks to update UI
        // ✅ re-fetch from DB to update UI
        await fetchTasks();
        e.target.reset(); 
      } else {
        alert("Task is not added due to some error. Please try again.");
      }
    } catch (error) {
      console.error("Something went wrong in sending workpage api");
    }
  };

  return (
    <div>
      <div className="flex justify-center text-3xl underline bold font-serif font-semibold">
        YOUR TO-DO-LIST
      </div>

      <div className="mt-10 space-y-3">
        {todos.map((item) => (
           
              <List 
               title={item.taskitem}
                id={item._id}
                onDelete={handledelete}
               />
             
          
        
        ))}
      </div>

      <div className="flex flex-col justify-center mb-3">
        <div className="flex justify-center font-semibold text-2xl">
          Add a Task
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-3">
            <div className="flex justify-center items-center">
              <TextField
                id="taskitem"
                name="taskitem"
                label="Add task here"
                fullWidth
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <Button variant="contained" type="submit" size="large">
                Add task
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Workpage;
