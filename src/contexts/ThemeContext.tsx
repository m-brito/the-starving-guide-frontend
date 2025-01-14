// External Libraries
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import React, { createContext, useState, useEffect, useContext } from "react";

// Styles
import { GlobalStyle } from "@globals/index";
import { lightTheme, darkTheme } from "@globals/theme";

interface IThemeContext {
  themeName: string;
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // States
  const [theme, setTheme] = useState(darkTheme);
  const [themeName, setThemeName] = useState("dark");

  // UseEffects
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "light" ? lightTheme : darkTheme);
      setThemeName(savedTheme);
    }
  }, []);

  // Functions
  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    setThemeName(newTheme === lightTheme ? "light" : "dark");
    localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
