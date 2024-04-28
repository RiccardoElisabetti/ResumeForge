import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
	Control,
	FieldArrayWithId,
	FieldErrors,
	UseFormRegister,
} from "react-hook-form";
import { FormType } from "./Context";
import { useState } from "react";

export function Skill({
	register,
	field,
	index,
}: {
	register: UseFormRegister<FormType>;
	field: FieldArrayWithId<FormType, "skills", "id">;
	index: number;
}) {
	const [skillLevel, setSkillLevel] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setSkillLevel(event.target.value as string);
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
				<Typography fontWeight={600}>Abilità {index + 1}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid container spacing={4} padding={0.5}>
					<Grid xs={12} sm={6}>
						<TextField
							{...register(`skills.${index}.skill` as const)}
							label="Competenza"
							sx={{ width: "100%" }}
							variant="filled"
						/>
					</Grid>
					<Grid xs={12} sm={6}>
						<FormControl fullWidth variant="filled">
							<InputLabel id="select-label">Livello</InputLabel>
							<Select
								{...register(`skills.${index}.level` as const)}
								variant="filled"
								autoWidth
								labelId="select-label"
								value={skillLevel}
								onChange={handleChange}
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
	);
}
