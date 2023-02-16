import React from "react";
import styles from "./Header.module.css";

const Header = ({ filters, filter, onFilterChange }) => {
  return (
    <>
      <header className={styles.header}>
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
