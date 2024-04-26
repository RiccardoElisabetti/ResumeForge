import ResumeForgeLogo from "./../assets/ResumeForgeLogo";
import GenericGuyImage from "./../assets/GenericGuy.jpg";
import { Link as Anchor } from "react-router-dom";
import {
	Box,
	Button,
	Stack,
	Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Unstable_Grid2";
import { useMediaQuery, useTheme } from "@mui/material";

export function Homepage() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Stack height={"100%"}>
			<Stack
				width={"100%"}
				direction={"row"}
				display={"flex"}
				justifyContent={"space-between"}
				boxSizing={"border-box"}
				padding={"1rem"}
			>
				<Stack
					component={Anchor}
					to="/"
					sx={{ textDecoration: "none", color: "black" }}
					direction={"row"}
					spacing={0.5}
					alignItems={"center"}
					fontSize={30}
				>
					<ResumeForgeLogo sx={{ fontSize: "inherit" }}></ResumeForgeLogo>
					<Typography fontSize={"inherit"} fontWeight={600}>
						ResumeForge
					</Typography>
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
			</Stack>
			<Box
				component="main"
				flexGrow={1}
				height={"100%"}
				fontSize={60}
				fontWeight={800}
			>
				<Grid container spacing={12} sx={{ m: 0, p: 0 }} height={"100%"}>
					<Grid
						xs={12}
						md={6}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flexDirection={"column"}
					>
						<Box sx={{ width: "70%" }}>
							<Typography
								sx={{ fontSize: "inherit", fontWeight: "inherit" }}
								paddingBottom={4}
							>
								Semplice, veloce e efficace
							</Typography>
							<Typography sx={{ fontSize: "inherit", fontWeight: "inherit" }}>
								Crea il tuo CV personalizzato in pochi passaggi
							</Typography>
						</Box>
						<Button
							to="/form"
							sx={{
								bgcolor: "#5846FB",
								border: "3px solid rgba(88, 70, 251, 0.87)",
								borderRadius: "2rem",
								width: "fit-content",
								fontWeight: "700",
								marginTop: "4rem",
							}}
							component={Anchor}
							variant="contained"
							endIcon={<ArrowForwardIcon />}
						>
							Crea il tuo CV
						</Button>
					</Grid>
					<Grid
						xs={0}
						md={6}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						{!isSmallScreen && (
							<Box
								component="img"
								src={GenericGuyImage}
								alt="Generic Guy"
								sx={{
									maxWidth: "40rem",
									aspectRatio: 1,
									objectFit: "cover",
									border: "5px solid #9593FA",
									borderRadius: "2rem",
								}}
							/>
						)}
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
