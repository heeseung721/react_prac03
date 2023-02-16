import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ todo, onUpdate, onDelete }) => {
  // 간편하게 사용하기 위해 text status를 todo 객체로 부터 받아옴
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <>
      <li>
        <input
          type="checkbox"
          id="checkbox"
          checked={status === "completed"}
          onChange={handleChange}
        />
        <labal htmlFor="checkbox">{text}</labal>
        <button onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </li>
    </>
  );
};

export default Todo;
