import { useCallback, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "theme";
const DARK_CLASS = "dark";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export default function usePersistedTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === "dark") {
      root.classList.add(DARK_CLASS);
      body.classList.add(DARK_CLASS);
    } else {
      root.classList.remove(DARK_CLASS);
      body.classList.remove(DARK_CLASS);
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    []
  );

  return { theme, setTheme, toggleTheme };
}

