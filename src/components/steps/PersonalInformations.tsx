import { Link } from "react-router-dom";

export function PersonalInformations() {
	return (
		<fieldset style={{width: "30%"}}>
			<legend>Dati Personali</legend>
			<label htmlFor="name">Name:</label>
			<input type="text" id="name" name="name" required />
			<br/>
			<label htmlFor="name">Cognome:</label>
			<input type="text" id="name" name="name" required />
			<br />
			<label htmlFor="name">Indirizzo:</label>
			<input type="text" id="name" name="name" required />
			<br />
			<label htmlFor="name">Codice postale:</label>
			<input type="text" id="name" name="name" required />
			<br />
			<label htmlFor="name">Città/Capolougo:</label>
			<input type="text" id="name" name="name" required />
			<br />
			<label htmlFor="name">Numero telefonico:</label>
			<input type="text" id="name" name="name" required />
			<br />
			<label htmlFor="name">Cognome:</label>
			<input type="text" id="name" name="name" required />
			<br />
			<label htmlFor="email">Email:</label>
			<input type="email" id="email" name="email" required />
			<br />
			<button style={{display: "block"}}>
				<Link to="/form/history">next</Link>
			</button>
		</fieldset>
	);
}
