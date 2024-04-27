import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { PersonalInformations } from "./components/steps/PersonalInformations";
import { EmploymentHistory } from "./components/steps/EmploymentHistory";
import { Summary } from "./components/steps/Summary";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useState } from "react";
import { defaultFormValues} from "./components/Context";
import { FormContext} from "./components/Context";

const theme = createTheme({
	typography: {
		fontFamily: "Manrope, sans-serif",
	},
});


function App() {
	const [formContextValues, setFormContextValues] = useState(defaultFormValues)

	return (
		<ThemeProvider theme={theme}>
			<FormContext.Provider value={{formContextValues, setFormContextValues}}>
				<Box
					sx={{
						height: "100svh",
						overflow: "hidden",
						"&::before": {
							content: '""',
							position: "absolute",
							top: 0,
							right: 0,
							width: "100%",
							height: "100%",
							clipPath: "polygon(55% 0, 100% 0, 100% 100%, 45% 100%)",
							background:
								"linear-gradient(74deg, #B5EDBA 9.68%, #3F8545 90.32%)",
							zIndex: -1,
						},
					}}
				>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/form/" element={<PersonalInformations />} />
						<Route path="/form/history" element={<EmploymentHistory />} />
						<Route path="/form/summary" element={<Summary />} />
					</Routes>
				</Box>
			</FormContext.Provider>
		</ThemeProvider>
	);
}

export default App;
