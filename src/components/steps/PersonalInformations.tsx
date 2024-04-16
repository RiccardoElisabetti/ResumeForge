import { Link } from "react-router-dom";

export function PersonalInformations() {
	return (
		<fieldset>
			<legend>Personal Data</legend>
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" name="name" required />
			<br />
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" name="email" required />
			<br />
			<label htmlFor="phone">Phone Number:</label>
			<input type="tel" id="phone" name="phone" />
			<button style={{display: "block"}}>
				<Link to="/form/history">next</Link>
			</button>
		</fieldset>
	);
}
