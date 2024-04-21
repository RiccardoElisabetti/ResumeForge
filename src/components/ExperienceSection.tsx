import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Grid from "@mui/material/Unstable_Grid2";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	Typography,
} from "@mui/material";

export function Experience() {
	return (
			<Accordion
				square
				sx={{
					width: "100%",
					border: "3px solid #9593FA",
					borderRadius: "1.5rem",
				}}
			>
				<AccordionSummary
					expandIcon={<ArrowDownwardIcon />}
				>
					<Typography fontWeight={600}>Esperienza Lavorativa</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container spacing={3}>
						<Grid xs={12} sm={6}>
							<TextField
								sx={{ width: "100%" }}
								label="Titolo"
								variant="filled"
							/>
						</Grid>
						<Grid xs={12} sm={6}>
							<FormControl variant="filled" fullWidth>
								<InputLabel id="select-label">Tipo di impiego</InputLabel>
								<Select
									variant="filled"
									autoWidth
									labelId="select-label"
									value={""}
								>
									<MenuItem value={"Tempo pieno"}>Tempo pieno</MenuItem>
									<MenuItem value={"Part time"}>Part time</MenuItem>
									<MenuItem value={"Lavoratore autonomo"}>
										Lavoratore autonomo
									</MenuItem>
									<MenuItem value={"Libero professionista"}>
										Libero professionista
									</MenuItem>
									<MenuItem value={"Libero lavoratore"}>
										Libero lavoratore
									</MenuItem>
									<MenuItem value={"Contratto"}>Contratto</MenuItem>
									<MenuItem value={"Tirocinio"}>Tirocinio</MenuItem>
									<MenuItem value={"Apprendistato"}>Apprendistato</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid xs={12} sm={6}>
							<TextField
								sx={{ width: "100%" }}
								label="Azienda"
								variant="filled"
							/>
						</Grid>
						<Grid xs={12} sm={6}>
							<TextField
								sx={{ width: "100%" }}
								label="Luogo"
								variant="filled"
							/>
						</Grid>
						<Grid xs={12} sm={6}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									sx={{ width: "100%" }}
									label={"Data di inizio impiego"}
									slotProps={{
										field: { clearable: true },
									}}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid xs={12} sm={6}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									sx={{ width: "100%" }}
									label={"Data di fine impiego"}
									slotProps={{
										field: { clearable: true },
									}}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid xs={12}>
							<TextField
								sx={{ width: "100%" }}
								label="Descrizione"
								variant="filled"
								multiline
							/>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>

		// <form>
		// 	<fieldset>
		// 		<legend>Esperienza Lavorativa</legend>
		// 		<div>
		// 			<div>
		// 				<label htmlFor="titolo">Titolo:</label>
		// 				<input type="text" id="titolo" name="titolo" required />
		// 				<label htmlFor="tipo-contratto">Tipo di contratto:</label>
		// 				<input
		// 					type="text"
		// 					id="tipo-contratto"
		// 					name="tipo-contratto"
		// 					required
		// 				/>
		// 			</div>
		// 			<br />
		// 			<div>
		// 				<label htmlFor="azienda">Azienda:</label>
		// 				<input type="text" id="azienda" name="azienda" required />
		// 				<label htmlFor="città">Città:</label>
		// 				<input type="text" id="città" name="città" />
		// 			</div>
		// 			<br />
		// 			<div>
		// 				<label htmlFor="data-inizio">Data d'inizio:</label>
		// 				<input type="date" id="data-inizio" name="data-inizio" />
		// 				<label htmlFor="data-fine">Data di fine(Opzionale):</label>
		// 				<input type="date" id="data-fine" name="data-fine" />
		// 			</div>
		// 			<br />
		// 			<label htmlFor="descrizione">Descrizione:</label>
		// 			<textarea id="descrizione" name="descrizione" />
		// 			<br />
		// 			<button>+ Aggiungi nuova esperienza</button>
		// 		</div>
		// 	</fieldset>
		// </form>
	);
}
