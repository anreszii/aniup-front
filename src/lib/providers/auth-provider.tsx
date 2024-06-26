import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { IAuthContext } from "src/lib/types/providers";
import { TypeUserState } from "src/lib/types/user";
import useAsyncStorage from "src/lib/hooks/use-async-storage";

const AuthContext = createContext({} as IAuthContext);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { storedValue: user, setValue: setUser } =
    useAsyncStorage<TypeUserState>("user");

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
