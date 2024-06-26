import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import '../input.css'
export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleedit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handledelete =(id) =>{
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <div className="text-center mt-20 mr-40">
      <div className="p-5 text-3xl">Todo list</div>
      <Create />
      {todos.length === 0 ? (
        <div className="p-5">No records</div>
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            <div onClick={() => handleedit(todo._id)}>
              {todo.done ? <BsFillCheckCircleFill /> : <BsCircleFill />}
              <p>{todo.task}</p>
            </div>
            <div>
              <MdDelete onClick={() => handledelete(todo._id)} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
