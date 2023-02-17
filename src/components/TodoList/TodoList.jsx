import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ filter }) => {
  //todo 목록의 상태를 관리
  //배열 안에 객채로 투두 목록을 하나씩 저장 (지금 있는것은 초기값!)
  const [todos, setTodos] = useState(() => readTodos());

  //console.log 를 통해 todo가 잘 받아와지는지 확인 후
  //setTodos로 상태를 업데이트 하는데, 기존의 todos를 그대로 풀어서 두고
  //새로운 todo 항목을 추가해야 함
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(
      // 투두의 아이디가 업데이트된 아이디와 동일하다면 업데이트된것으로 바꿔주고 그렇지 않으면 원래대로 둠
      todos.map((todoItem) => (todoItem.id === updated.id ? updated : todoItem))
    );
  //아이디가 삭제하고자 하는 아이디가 아닌것들만 남김
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todoItem) => todoItem.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItem(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

function readTodos() {
  const todos = localStorage.getItem("todos");

  //todos가 있다면 JSON.parse를 실행해서 배열 리턴, 없다면 빈배열 리턴
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItem(todos, filter) {
  // 필터가 all이면 전부 다 보여주고,
  // 그렇지 않으면 각각 해당하는것(active, complited)만 보여줌
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

export default TodoList;
