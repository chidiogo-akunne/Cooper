import { createContext, useContext } from "react";
//@ts-ignore
const AuthContext = createContext();

function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthContext };
