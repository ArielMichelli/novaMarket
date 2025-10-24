import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

// Exportar el contexto para que el hook pueda usarlo
export { AuthContext };

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	function login(name) {
		setUser({ name });
	}

	function logout() {
		setUser(null);
		navigate("/");
	}

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
