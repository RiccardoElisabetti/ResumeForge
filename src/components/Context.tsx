import { createContext, ReactNode, useContext, useState } from "react";

export const FormStateContext = createContext({});

type AppProviderProps = {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
	const value = useState({});
	return (
		<FormStateContext.Provider value={value}>
			{children}
		</FormStateContext.Provider>
	);
}

export function useAppState() {
	const context = useContext(FormStateContext);
	if (!context) {
		throw new Error("useAppState must be used within the AppProvider");
	}
	return context;
}
