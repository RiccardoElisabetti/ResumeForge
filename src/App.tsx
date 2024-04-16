import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { AppProvider } from "./components/State";
import { PersonalInformations } from "./components/steps/PersonalInformations";
import { EmploymentHistory } from "./components/steps/EmploymentHistory";
import { Summary } from "./components/steps/Summary";

function App() {
	return (
		<AppProvider>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/form/" element={<PersonalInformations />} />
				<Route path="/form/history" element={<EmploymentHistory />} />
				<Route path="/form/summary" element={<Summary />} />
			</Routes>
		</AppProvider>
	);
}

export default App;
