import { Link } from "react-router-dom";
import { Experience } from "../ExperienceSection";
import { Skill } from "../SkillSection";
import { FormWrapper } from "../FormWrapper";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";

export function EmploymentHistory() {
	return (
		<FormWrapper>
			<Stack spacing={2}>
				<Stack>
					<Experience />
					<Button
						sx={{
							width: "100%",
							borderRadius: "2rem",
							marginTop: "1rem",
							color: "#9593FA",
						}}
						variant="text"
						startIcon={<AddIcon />}
					>
						<Typography fontWeight={500}>
							Aggiungi Esperienza Lavorativa
						</Typography>
					</Button>
				</Stack>
				<Stack>
					<Skill />
					<Button
						sx={{
							width: "100%",
							borderRadius: "2rem",
							marginTop: "1rem",
							color: "#9593FA",
						}}
						variant="text"
						startIcon={<AddIcon />}
					>
						<Typography fontWeight={500}>
							Aggiungi Abilità
						</Typography>
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
		</FormWrapper>
	);
}
