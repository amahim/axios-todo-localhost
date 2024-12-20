import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TableData = ({ task, tasks, setTasks }) => {
  const { _id, taskName, taskDate } = task;

  //   delete
  const handleDelete = (taskId) => {
    axios
    .delete(`http://localhost:5000/tasks/${taskId}`)
    .then((res) => {
      setTasks(tasks.filter((task) => task._id !== taskId));
      toast.success("Task deleted successfully");
    });
  };

  return (
    <div className="grid grid-cols-12">
      {/* row 1 */}

      <td className="col-span-6">{taskName}</td>
      <td className="col-span-4">{taskDate}</td>

      <td className="col-span-2">
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          <MdDelete />
        </button>
      </td>
    </div>
  );
};

export default TableData;
