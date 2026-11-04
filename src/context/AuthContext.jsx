import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const login = (userData) => {
    setUser(userData);
    setCurrentPage('home');
  };

  const logout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <AuthContext.Provider value={{ user, currentPage, setCurrentPage, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};
