import ResumeForgeLogo from "./../assets/ResumeForgeLogo";
import GenericGuyImage from "./../assets/GenericGuy.jpg";
import { Link as Anchor } from "react-router-dom";
import {
	AppBar,
	Box,
	Button,
	Container,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Unstable_Grid2";

export function Homepage() {
	return (
		<Stack height={"100svh"}>
			<AppBar
				elevation={0}
				position="static"
				sx={{ paddingTop: "1rem", bgcolor: "white", paddingX: "2rem" }}
			>
				<Toolbar
					disableGutters
					sx={{ justifyContent: "space-between", width: "100%" }}
				>
					<Stack
						component={Anchor}
						to="/"
						sx={{ textDecoration: "none", color: "black" }}
						direction={"row"}
						spacing={0.5}
						alignItems={"center"}
					>
						<ResumeForgeLogo></ResumeForgeLogo>
						<Typography fontWeight={600}>ResumeForge</Typography>
					</Stack>
					<Button
						sx={{
							bgcolor: "#5846FB",
							border: "3px solid rgba(88, 70, 251, 0.87)",
							borderRadius: "2rem",
							width: "fit-content",
						}}
						variant="contained"
						startIcon={<LoginIcon />}
					>
						Sign-up
					</Button>
				</Toolbar>
			</AppBar>
			<Box component="main" flexGrow={1} height={"100%"}>
				<Grid container spacing={4} sx={{ m: 0, p: 0 }} height={"100%"}>
					<Grid
						xs={6}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexDirection={"column"}
					>
						<Typography fontSize={"inherit"}>
							Semplice, veloce e efficace
						</Typography>
						<Typography fontSize={"inherit"}>
							Crea il tuo CV personalizzato in pochi passaggi
						</Typography>
						<Button
							to="/form"
							sx={{
								bgcolor: "#5846FB",
								border: "3px solid rgba(88, 70, 251, 0.87)",
								borderRadius: "2rem",
								width: "fit-content",
								fontWeight: "700",
							}}
							component={Anchor}
							variant="contained"
							endIcon={<ArrowForwardIcon />}
						>
							Crea il tuo CV
						</Button>
					</Grid>
					<Grid
						xs={6}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexDirection={"column"}
					>
						<Box
							component="img"
							src={GenericGuyImage}
							alt="Generic Guy"
							sx={{ maxWidth: "30rem", aspectRatio: 1 , objectFit: "cover"}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Stack direction={"row"} justifyContent={"space-between"} padding={4}>
				<Typography fontWeight={900}>
					Hai riscontrato problemi nella creazione del tuo CV?
				</Typography>
				<Link
					sx={{ textDecoration: "none" }}
					href="https://github.com/RiccardoElisabetti/ResumeForge"
				>
					<Stack
						fontSize={"2.5rem"}
						spacing={1}
						direction={"row"}
						alignItems={"center"}
					>
						<Button
							sx={{
								bgcolor: "#5846FB",
								border: "3px solid rgba(88, 70, 251, 0.87)",
								borderRadius: "2rem",
								width: "fit-content",
								fontWeight: "700",
							}}
							variant="contained"
							endIcon={<ArrowForwardIcon />}
							size="small"
						>
							Github page
						</Button>
						<GitHubIcon sx={{ color: "black" }} fontSize="inherit"></GitHubIcon>
					</Stack>
				</Link>
			</Stack>
		</Stack>
	);
}
