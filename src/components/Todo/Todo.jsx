import React from "react";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Todo.module.css";

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
      <li className={styles.todo}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="checkbox"
          checked={status === "completed"}
          onChange={handleChange}
        />
        <labal htmlFor="checkbox" className={styles.text}>
          {text}
        </labal>

        <button onClick={handleDelete} className={styles.button}>
          <AiFillDelete />
        </button>
      </li>
    </>
  );
};

export default Todo;
