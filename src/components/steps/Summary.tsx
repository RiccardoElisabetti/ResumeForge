import { Link } from "react-router-dom";


export function Summary() {
	return (
		<fieldset>
			<legend>Summary</legend>
			<p>Here's a summary of your information:</p>
			{/* Display data from previous forms (implementation depends on your state management) */}
			<ul>
				<li>Name: {/* Display retrieved name */}</li>
				<li>Email: {/* Display retrieved email */}</li>
				{/* ... and so on for other fields */}
			</ul>
			{/* Optionally, provide a button for form submission */}
			<button style={{ display: "block" }}>
				<Link to="/form/history">back</Link>
			</button>
		</fieldset>
	);
}
