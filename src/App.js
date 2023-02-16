import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

//고정된 필터 값 3개를 이곳에서 지정해 둠
const filters = ["all", "active", "completed"];

function App() {
  //필터의 초기값은 all
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      {/* Header에 모든 필터에 대한 정보, 현재 선택된 필터 정보, 필터가 변경되면 호출되는 함수 를 전달 */}
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />

      {/* TodoList에는 현재 선택된 필터 정보 를 전달  */}
      <TodoList filter={filter} />
    </>
  );
}

export default App;
