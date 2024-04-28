import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import {
	Control,
	FieldArrayWithId,
	FieldErrors,
	UseFormRegister,
} from "react-hook-form";
import { FormType } from "./Context";
import { useState } from "react";
import { FormDatePicker } from "./FormDatePicker";

export function Experience({
	register,
	field,
	index,
	control,
}: {
	register: UseFormRegister<FormType>;
	field: FieldArrayWithId<FormType, "experiences", "id">;
	index: number;
	errors: FieldErrors<FormType>;
	control: Control<FormType, any>;
}) {
	const [employmentType, setEmploymentType] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setEmploymentType(event.target.value as string);
	};

	return (
		<Accordion
			square
			sx={{
				width: "100%",
				border: "3px solid #9593FA",
				borderRadius: "1.5rem",
				marginTop: "1rem",
			}}
			key={field.id}
		>
			<AccordionSummary expandIcon={<ArrowDownwardIcon />}>
				<Typography fontWeight={600}>
					Esperienza Lavorativa {index + 1}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid container spacing={3}>
					<Grid xs={12} sm={6}>
						<TextField
							{...register(`experiences.${index}.title` as const)}
							sx={{ width: "100%" }}
							label="Titolo"
							variant="filled"
						/>
					</Grid>
					<Grid xs={12} sm={6}>
						<FormControl variant="filled" fullWidth>
							<InputLabel id="select-label">Tipo di impiego</InputLabel>
							<Select
								{...register(`experiences.${index}.employmentType` as const)}
								variant="filled"
								autoWidth
								labelId="select-label"
								value={employmentType}
								onChange={handleChange}
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
							{...register(`experiences.${index}.company` as const)}
							sx={{ width: "100%" }}
							label="Azienda"
							variant="filled"
						/>
					</Grid>
					<Grid xs={12} sm={6}>
						<TextField
							{...register(`experiences.${index}.location` as const)}
							sx={{ width: "100%" }}
							label="Luogo"
							variant="filled"
						/>
					</Grid>
					<Grid xs={12} sm={6}>
						<FormDatePicker
							label={"Data di inizio impiego"}
							control={control}
							name={`experiences.${index}.startDate`}
						/>
					</Grid>
					<Grid xs={12} sm={6}>
						<FormDatePicker
							label={"Data di inizio impiego"}
							control={control}
							name={`experiences.${index}.endDate`}
						/>
					</Grid>
					<Grid xs={12}>
						<TextField
							{...register(`experiences.${index}.description` as const)}
							sx={{ width: "100%" }}
							label="Descrizione"
							variant="filled"
							multiline
						/>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
}
