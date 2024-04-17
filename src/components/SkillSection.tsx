export function Skill(){
    return (
        <fieldset>
            <legend>Competenza</legend>
            <label htmlFor="compentenza">Competenza:</label>
        	<input type="text" id="compentenza" name="competenza" required />
            <label htmlFor="livello">Livello:</label>
        	<input type="text" id="livello" name="livello" required />
            <button>+ Aggiungi nuova esperienza</button>
        </fieldset>
    );
}