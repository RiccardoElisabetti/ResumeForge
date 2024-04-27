import { FormWrapper } from "../FormWrapper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useForm } from "react-hook-form";
import { FormType, useFormContext } from "../Context";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";


export function PersonalInformations() {
	const { formContextValues, setFormContextValues } = useFormContext();

	const { register, control, handleSubmit, formState } = useForm<FormType>({
		defaultValues: formContextValues
	});
	const { errors } = formState;

	const navigate = useNavigate();

	const onSubmit = (data: FormType) => {
		setFormContextValues(data)
		navigate("/form/history");
	};

	return (
		<Stack
			sx={{
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<FormWrapper>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Grid container rowSpacing={4} columnSpacing={2}>
						<Grid md={6} xs={12}>
							<TextField
								{...register("name", {
									required: "Nome richiesto",
								})}
								sx={{ width: "100%" }}
								label="Nome"
								variant="filled"
								error={!!errors.name?.message}
								helperText={errors.name?.message}
							/>
						</Grid>
						<Grid md={6} xs={12}>
							<TextField
								sx={{ width: "100%" }}
								label="Cognome"
								variant="filled"
								{...register("surname", {
									required: "Cognome richiesto",
								})}
								error={!!errors.surname?.message}
								helperText={errors.surname?.message}
							/>
						</Grid>
						<Grid md={6} xs={12}>
							<TextField
								sx={{ width: "100%" }}
								label="Indirizzo"
								variant="filled"
								{...register("address")}
							/>
						</Grid>
						<Grid md={6} xs={12}>
							<TextField
								sx={{ width: "100%" }}
								label="Codice postale"
								variant="filled"
								{...register("postalCode")}
							/>
						</Grid>
						<Grid md={6} xs={12}>
							<TextField
								sx={{ width: "100%" }}
								label="Città/Capoluogo"
								variant="filled"
								{...register("position")}
							/>
						</Grid>
						<Grid md={6} xs={12}>
							<TextField
								sx={{ width: "100%" }}
								label="Numero telefonico"
								variant="filled"
								{...register("phoneNumber")}
							/>
						</Grid>
						<Grid xs={12}>
							<TextField
								sx={{ width: "100%" }}
								label="Sito Web"
								variant="filled"
								{...register("website")}
							/>
						</Grid>
						<Grid xs={12}>
							<TextField
								sx={{ width: "100%" }}
								label="Email"
								variant="filled"
								{...register("email")}
							/>
						</Grid>
						<Grid display={"flex"} justifyContent={"center"} xs={12}>
							<Button
								sx={{
									width: "80%",
									bgcolor: "#5846FB",
									borderRadius: "2rem",
									marginTop: "1rem",
								}}
								type="submit"
								variant="contained"
								endIcon={<ArrowForwardIcon />}
							>
								next
							</Button>
						</Grid>
					</Grid>
				</form>
				<DevTool control={control} />
			</FormWrapper>
		</Stack>
	);
}
