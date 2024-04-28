import { Link, useNavigate } from "react-router-dom";
import { Experience } from "../ExperienceSection";
import { Skill } from "../SkillSection";
import { FormWrapper } from "../FormWrapper";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { useFieldArray } from "react-hook-form";
import { FormType, useFormContext } from "../Context";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FiveG } from "@mui/icons-material";

export function EmploymentHistory() {
	const { formContextValues, setFormContextValues } = useFormContext();

	const { register, control, handleSubmit, formState } = useForm<FormType>({
		defaultValues: formContextValues,
	});

	const { errors } = formState;

	const experiences = useFieldArray({
		name: "experiences",
		control,
	});

	const skills = useFieldArray({
		name: "skills",
		control,
	});

	const navigate = useNavigate();
	const onSubmit = (data: FormType) => {
		setFormContextValues(data);
		navigate("/form/summary");
	};

	return (
		<Stack
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<FormWrapper>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack spacing={2}>
						<Stack>
							{experiences.fields.map((field, index) => {
								return (
									<>
										<Experience
											register={register}
											field={field}
											index={index}
											errors={errors}
											control={control}
										/>
										{index > 0 && (
											<Button
												sx={{
													width: "100%",
													borderRadius: "2rem",
													marginTop: "1rem",
													color: "#9593FA",
												}}
												variant="text"
												startIcon={<AddIcon />}
												onClick={() => experiences.remove(index)}
											>
												<Typography fontWeight={500}>
													Rimuovi Esperienza Lavorativa
												</Typography>
											</Button>
										)}
									</>
								);
							})}
							<Button
								sx={{
									width: "100%",
									borderRadius: "2rem",
									marginTop: "1rem",
									color: "#9593FA",
								}}
								variant="text"
								startIcon={<AddIcon />}
								onClick={() =>
									experiences.append({
										title: "",
										employmentType: null,
										company: "",
										location: "",
										startDate: null,
										endDate: null,
										description: "",
									})
								}
							>
								<Typography fontWeight={500}>
									Aggiungi Esperienza Lavorativa
								</Typography>
							</Button>
							{skills.fields.map((field, index) => {
								return (
									<>
										<Skill register={register} field={field} index={index} />
										{index > 0 && (
											<Button
												sx={{
													width: "100%",
													borderRadius: "2rem",
													marginTop: "1rem",
													color: "#9593FA",
												}}
												variant="text"
												startIcon={<AddIcon />}
												onClick={() => skills.remove(index)}
											>
												<Typography fontWeight={500}>
													Rimuovi Abilità
												</Typography>
											</Button>
										)}
									</>
								);
							})}
							<Button
								sx={{
									width: "100%",
									borderRadius: "2rem",
									marginTop: "1rem",
									color: "#9593FA",
								}}
								variant="text"
								startIcon={<AddIcon />}
								onClick={() =>
									skills.append({
										skill: "",
										level: null
									})
								}
							>
								<Typography fontWeight={500}>Aggiungi Abilità</Typography>
							</Button>
						</Stack>
						<Stack
							direction={"row"}
							display={"flex"}
							justifyContent={"space-around"}
						>
							<Button
								sx={{
									width: "30%",
									bgcolor: "#5846FB",
									borderRadius: "2rem",
									marginTop: "1rem",
								}}
								component={Link}
								to="/form/"
								variant="contained"
								startIcon={<ArrowBackIcon />}
							>
								back
							</Button>
							<Button
								sx={{
									width: "30%",
									bgcolor: "#5846FB",
									borderRadius: "2rem",
									marginTop: "1rem",
								}}
								component={Link}
								to="/form/summary"
								variant="contained"
								endIcon={<ArrowForwardIcon />}
							>
								next
							</Button>
						</Stack>
					</Stack>
				</form>
				<DevTool control={control} />
			</FormWrapper>
		</Stack>
	);
}
