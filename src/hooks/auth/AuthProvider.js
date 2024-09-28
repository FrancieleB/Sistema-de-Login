import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = (credentials) => {
    // Lógica para autenticação (mock ou real)
    setUser({ name: 'User Name' }); // Exemplo de setagem do usuário
  };

  return (
    <AuthContext.Provider value={{ user, signin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Remover esta linha, pois `useAuth` não está definido aqui
// export default useAuth; 
