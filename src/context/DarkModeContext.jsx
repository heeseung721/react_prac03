//어플리케이션에서 공통적으로 필요한 셋팅을 만들려고 함  context 활용
import { createContext, useContext, useEffect, useState } from "react";

//가장 먼저 할 일은 createContext 생생성과 동시에 export
const DarkModeContext = createContext();

//Provider로 자식 요소들을 감싸주면 됨
export function DarkModeProvider({ children }) {
  //다크모드의 상태를 설정해줄 useState
  //초기 설정은 항상 라이트모드가 되도록 false 설정
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  //어플리케이션이 실행될 때 딱 한번, 다크모드인지 아닌지 여부를 판단함
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    //리액트 내부 state에 먼저 다크모드를 업데이트 함
    setDarkMode(isDark);
    //현재 만들고 있는 웹페이지 안에 다크모드르 설정 여부를 업데이트 함
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

//외부에서 다크모드를 사용하기 편하도록 훅을 만듬
export const useDarkMode = () => useContext(DarkModeContext);
