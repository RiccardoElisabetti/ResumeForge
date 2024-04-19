import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { PersonalInformations } from "./components/steps/PersonalInformations";
import { EmploymentHistory } from "./components/steps/EmploymentHistory";
import { Summary } from "./components/steps/Summary";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "Manrope, sans-serif",
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/form/" element={<PersonalInformations />} />
				<Route path="/form/history" element={<EmploymentHistory />} />
				<Route path="/form/summary" element={<Summary />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
