import { createContext, useState } from 'react';

const SearchBarContext = createContext({});

function SearchBarProvider({ children }) {
  const [isFocus, setIsFocus] = useState(false);
  const [currentInput, setCurrentInput] = useState(null);

  const resetFocusState = () => {
    setIsFocus(false);
    setCurrentInput(null);
  };

  const updateFocusState = label => {
    setIsFocus(true);
    setCurrentInput(label);
  };

  return (
    <SearchBarContext.Provider value={{ isFocus, resetFocusState, updateFocusState, currentInput }}>
      {children}
    </SearchBarContext.Provider>
  );
}

export { SearchBarContext, SearchBarProvider };
