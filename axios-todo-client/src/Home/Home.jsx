import axios from "axios";
import toast from "react-hot-toast";
import Table from "./Table";
import { useState } from "react";

const Home = () => {
  const [search,setSearch]= useState("")

  const taskFormSubmit = e =>{
    // e.preventDefault();
  
    const form = e.target;
    const taskName = form.taskName.value; 
    const taskDate = form.taskDate.value; 
  

    // posting data to database
    axios
    .post("http://localhost:5000/tasks", { taskName, taskDate })
    .then((res) => {
      toast.success('Task successfully added!')
      form.reset();
    })
  }


 


  return (
    <div className=" py-5 w-3/5 mx-auto border-2 rounded-2xl border-blue-700 my-10">
      {/* header */}
      <div>
        <h1 className="text-2xl md:text-4xl text-blue-700 font-semibold text-center">
          Todo By Axios
        </h1>
        <div className="w-[85%] mx-auto divider divider-primary"></div>
      </div>
      {/* ------------------------------------------------------------ */}
      {/* Functionalities */}
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col gap-4">
            {/* search */}
          {/* <label className="input input-bordered flex items-center gap-2 border-blue-600">
            <input type="text" name="search" className="grow" 
            onChange={(e)=> setSearch(e.target.value)}
            placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label> */}
          {/* add task things */}
          <form onSubmit={taskFormSubmit} className="flex gap-2"> 
            <input
              type="text"
              name="taskName"
              placeholder="Task" className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="date"
              name="taskDate"
              placeholder="Date" className="input input-bordered input-primary w-full max-w-xs"
            />
            <button className="btn btn-primary">Add Task</button>

          </form>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      {/* Task Table */}
      <Table/>
    </div>
  );
};

export default Home;
