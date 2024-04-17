

export function Experience(){
    return(
        <form>
            <fieldset>
                <legend>Esperienza Lavorativa</legend>
                <div>
                    <div>
        	    		<label htmlFor="titolo">Titolo:</label>
        	    		<input type="text" id="titolo" name="titolo" required />
                        <label htmlFor="tipo-contratto">Tipo di contratto:</label>
        	    		<input type="text" id="tipo-contratto" name="tipo-contratto" required />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="azienda">Azienda:</label>
	    	    	    <input type="text" id="azienda" name="azienda" required />
                        <label htmlFor="città">Città:</label>
	    	    	    <input type="text" id="città" name="città" />
                    </div>
	    	    	<br />
                    <div>
                        <label htmlFor="data-inizio">Data d'inizio:</label>
	    	    	    <input type="date" id="data-inizio" name="data-inizio" />
	    	    	    <label htmlFor="data-fine">Data di fine(Opzionale):</label>
	    	    	    <input type="date" id="data-fine" name="data-fine" />
                    </div>
                    <br/>
                    <label htmlFor="descrizione">Descrizione:</label>
	    	    	<textarea id="descrizione" name="descrizione" />
	    	    	<br />
                    <button>+ Aggiungi nuova esperienza</button>
                </div>
            </fieldset>
        </form>
    );
}