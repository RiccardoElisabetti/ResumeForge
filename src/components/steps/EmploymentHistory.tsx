import { Link } from "react-router-dom";

export function EmploymentHistory() {
	return (
		<fieldset>
			<legend>Employment History</legend>
			<label htmlFor="company">Company Name:</label>
			<input type="text" id="company" name="company" required />
			<br />
			<label htmlFor="position">Job Title:</label>
			<input type="text" id="position" name="position" required />
			<br />
			<label htmlFor="startDate">Start Date:</label>
			<input type="date" id="startDate" name="startDate" />
			<br />
			<label htmlFor="endDate">End Date (Optional):</label>
			<input type="date" id="endDate" name="endDate" />
			<div style={{ display: "block" }}>
				<button style={{ display: "inline-block" }}>
					<Link to="/form/">back</Link>
				</button>
				<button style={{ display: "inline-block" }}>
					<Link to="/form/summary">next</Link>
				</button>
			</div>
		</fieldset>
	);
}
