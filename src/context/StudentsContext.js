import { useContext, createContext, useState } from "react";

const studentContext = createContext();

export const StudentContextProvider = ({ children }) => {
  const [studentData, setStudentData] = useState([]);
  const [nowStudentID, setNowStudentID] = useState(null);
  return (
    <studentContext.Provider
      value={{
        studentData,
        setStudentData,
        nowStudentID,
        setNowStudentID,
      }}
    >
      {children}
    </studentContext.Provider>
  );
};

export const useStudentContext = () => useContext(studentContext);
