import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

const Header = ({ filters, filter, onFilterChange }) => {
  //useDarkMode 훅을 이용하여 다크모드와 토글을 받아옴
  //다크모드 여부에 따라 아이콘을 바꾸는 토글링
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <header className={styles.header}>
        <button onClick={toggleDarkMode}>
          {!darkMode && <HiMoon />}
          {darkMode && <HiSun />}
        </button>
        <ul className={styles.filters}>
          {filters.map((value, index) => (
            <li key={index}>
              <button
                // 현재 전달받은 필터와 버튼의 값이 동일 하다면 (셀렉된 버튼이라면)
                className={`${styles.filter} ${
                  filter === value && styles.selected
                } `}
                onClick={() => onFilterChange(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
