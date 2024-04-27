import { createContext, ReactNode, useContext, useState } from "react";

type ExperienceValues = {
	title: string;
	employmentType:
		| "Tempo pieno"
		| "Part time"
		| "Lavoratore autonomo"
		| "Libero professionista"
		| "Contratto"
		| "Tirocinio"
		| "Apprendistato"
		| null;
	company: string;
	location: string;
	startDate: Date | null;
	endDate: Date | null;
	description: string;
};

type SkillValues = {
	skill: string;
	level: "Nessuno" | "Principiante" | "Capace" | "Esperto" | null;
};

export type FormType = {
	name: string;
	surname: string;
	address: string;
	postalCode: number | null;
	position: string;
	phoneNumber: string;
	website: string;
	email: string;
	skills: SkillValues[];
	experiences: ExperienceValues[];
};

export const defaultFormValues: FormType = {
	name: "",
	surname: "",
	address: "",
	position: "",
	phoneNumber: "",
	website: "",
	email: "",
	postalCode: null,
	skills: [
		{
			skill: "",
			level: null,
		},
	],
	experiences: [
		{
			title: "",
			employmentType: null,
			company: "",
			location: "",
			startDate: null,
			endDate: null,
			description: "",
		},
	],
};

type ContextValue = {
	formContextValues: FormType;
	setFormContextValues: React.Dispatch<React.SetStateAction<FormType>>;
};

// type AppProviderProps = {
// 	children: ReactNode;
// };

// export function Provider({ children }: AppProviderProps) {
// 	const [formData, setFormData] = useState(defaultFormData);
// 	return (
// 		<FormStateContext.Provider value={[formData, setFormData]}>
// 			{children}
// 		</FormStateContext.Provider>
// 	);
// }

export const FormContext = createContext<null | ContextValue>(null);

export function useFormContext() {
	const FormContextValue = useContext(FormContext);
	if (!FormContextValue) {
		throw new Error("useAppState must be used within the AppProvider");
	}
	return FormContextValue;
}
