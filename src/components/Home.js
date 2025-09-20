// import {useNavigate,Link as RouterLink,Navigate,Link }  from "react-router-dom";
// export default function Home() {
//     return (
//         <>
// <h1>This is the Home Page</h1>
// <Link component={RouterLink} to ="/login">logO out</Link>
//         </>
//     )
// }
import { useState } from "react";
// this is basically used for the making the hooks 
import {useNavigate,Link as RouterLink,Navigate,Link} from "react-router-dom";
function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleSubmit = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };
  const handleSave = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editValue;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditValue("");
  };
  return (
    <>
      <div className="container">
        <h1>Task List</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleSubmit}>Add Task</button>
        </div>
        <div className="tasks-list">
          {tasks.map((item, index) => (
            <div className="task-card" key={index}>
              {editIndex === index ? (
                <div className="edit-section">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button className="save-btn" onClick={() => handleSave(index)}>Save</button>
                </div>
              ) : (
                <p>{item}</p>
              )}
              <div className="action">
                <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link component={RouterLink} to="/login">logout</Link>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 500px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          h1 {
            text-align: center;
            color: #333;
          }

          .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
          }

          input[type="text"] {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
          }

          input[type="text"]:focus {
            border-color: #007BFF;
            outline: none;
          }

          button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
          }

          button:hover {
            opacity: 0.9;
          }

          .tasks-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .task-card {
            background: #eee;
            padding: 15px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .task-card p {
            margin: 0;
            font-size: 18px;
          }

          .edit-section {
            display: flex;
            gap: 10px;
          }

          .save-btn {
            background-color: #007BFF;
            color: white;
          }

          .edit-btn {
            background-color: #28A745;
            color: white;
          }

          .delete-btn {
            background-color: #DC3545;
            color: white;
          }

          .action {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  );
}

export default Home;
