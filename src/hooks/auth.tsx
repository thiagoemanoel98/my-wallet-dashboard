import React, { createContext, useContext, useState } from "react";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@my-wallet::logged");

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "thiago@gmail.com" && password === "123123") {
      localStorage.setItem("@my-wallet::logged", "true");
    } else {
      alert("Senha ou usuário inválidos");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@my-wallet::logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
