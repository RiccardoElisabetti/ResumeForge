import { Link } from "react-router-dom";
import { FormWrapper } from "../FormWrapper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useForm } from "react-hook-form";

export function PersonalInformations() {
	const { register } = useForm()


	return (
		<FormWrapper>

			<Grid container rowSpacing={4} columnSpacing={2}>
				<Grid md={6} xs={12}>
					<TextField sx={{ width: "100%" }} label="Nome" variant="filled" />
				</Grid>
				<Grid md={6} xs={12}>
					<TextField sx={{ width: "100%" }} label="Cognome" variant="filled" />
				</Grid>
				<Grid md={6} xs={12}>
					<TextField
						sx={{ width: "100%" }}
						label="Indirizzo"
						variant="filled"
						/>
				</Grid>
				<Grid md={6} xs={12}>
					<TextField
						sx={{ width: "100%" }}
						label="Codice postale"
						variant="filled"
						/>
				</Grid>
				<Grid md={6} xs={12}>
					<TextField
						sx={{ width: "100%" }}
						label="Città/Capoluogo"
						variant="filled"
						/>
				</Grid>
				<Grid md={6} xs={12}>
					<TextField
						sx={{ width: "100%" }}
						label="Numero telefonico"
						variant="filled"
						/>
				</Grid>
				<Grid xs={12}>
					<TextField sx={{ width: "100%" }} label="Sito Web" variant="filled" />
				</Grid>
				<Grid xs={12}>
					<TextField sx={{ width: "100%" }} label="Email" variant="filled" />
				</Grid>
				<Grid display={"flex"} justifyContent={"center"} xs={12}>
					<Button
						sx={{
							width: "80%",
							bgcolor: "#5846FB",
							borderRadius: "2rem",
							marginTop: "1rem",
						}}
						component={Link}
						to="/form/history"
						variant="contained"
						endIcon={<ArrowForwardIcon />}
						>
						next
					</Button>
				</Grid>
			</Grid>
	</FormWrapper>
	);
}
