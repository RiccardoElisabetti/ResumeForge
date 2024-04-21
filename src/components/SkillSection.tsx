import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export function Skill() {
	return (
		<Accordion
			square
			sx={{
				width: "100%",
				border: "3px solid #9593FA",
				borderRadius: "1.5rem",
			}}
		>
			<AccordionSummary expandIcon={<ArrowDownwardIcon />}>
				<Typography fontWeight={600}>Abilità</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid container spacing={4} padding={.5}>
					<Grid xs={12} sm={6}>
						<TextField
							label="Competenza"
							sx={{ width: "100%" }}
							variant="filled"
						/>
					</Grid>
					<Grid xs={12} sm={6}>
						<FormControl fullWidth variant="filled">
							<InputLabel id="select-label">Livello</InputLabel>
							<Select
								variant="filled"
								autoWidth
								labelId="select-label"
								value={""}
							>
								<MenuItem value="Nessuno">Nessuno</MenuItem>
								<MenuItem value="Principiante">Principiante</MenuItem>
								<MenuItem value="Capace">Capace</MenuItem>
								<MenuItem value="Esperto">Esperto</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>

		// <fieldset>
		// 	<legend>Competenza</legend>
		// 	<label htmlFor="compentenza">Competenza:</label>
		// 	<input type="text" id="compentenza" name="competenza" required />
		// 	<label htmlFor="livello">Livello:</label>
		// 	<input type="text" id="livello" name="livello" required />
		// 	<button>+ Aggiungi nuova esperienza</button>
		// </fieldset>
	);
}
