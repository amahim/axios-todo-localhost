import axios from "axios";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
const Table = () => {
  const [tasks, setTasks] = useState([]);

  // fetching/getting data
  useEffect(() => {
    axios
    .get("http://localhost:5000/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);



  return (
    <div className="w-[85%] mx-auto py-5">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr className="grid grid-cols-12">
            <th className="col-span-6">Task</th>
            <th className="col-span-4">Date</th>
            <th className="col-span-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr >
          {
          tasks.map((task) => (
            <TableData 
            key={task._id} 
            task={task} 
            tasks={tasks} 
            setTasks={setTasks} 
            />
          ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
