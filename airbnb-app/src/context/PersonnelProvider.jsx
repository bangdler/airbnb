import { createContext, useState } from 'react';
import { PERSONNEL_STATE_KEY, PERSONNEL_MIN as MIN, PERSONNEL_MAX as MAX } from '@/constants/PersonnelText';

const states = Object.values(PERSONNEL_STATE_KEY);
const initialPersonnel = (() => {
  return states.reduce((initialPersonnel, state) => {
    initialPersonnel[state] = 0;
    return initialPersonnel;
  }, {});
})();

const PersonnelContext = createContext({});

function PersonnelProvider({ children }) {
  const [personnel, setPersonnel] = useState(initialPersonnel);

  const addPerson = title => {
    if (personnel[title] === MAX) return;

    setPersonnel(prevState => {
      return { ...prevState, [title]: prevState[title] + 1 };
    });
  };

  const removePerson = title => {
    if (personnel[title] === MIN) return;

    setPersonnel(prevState => {
      return { ...prevState, [title]: prevState[title] - 1 };
    });
  };

  const personnelValue = (() => {
    const { ADULT, CHILD, INFANT } = PERSONNEL_STATE_KEY;
    return `게스트${personnel[ADULT] + personnel[CHILD]} 명, 유아${personnel[INFANT]} 명`;
  })();

  return (
    <PersonnelContext.Provider value={{ personnel, personnelValue, addPerson, removePerson }}>
      {children}
    </PersonnelContext.Provider>
  );
}

export { PersonnelContext, PersonnelProvider };
