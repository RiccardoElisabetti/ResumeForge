import { FormWrapper } from "../FormWrapper";
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Stack,
	Typography,
} from "@mui/material";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Resume } from "../Resume";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
export function Summary() {
	return (
		<Stack
			spacing={0}
			direction={"row"}
			height={"100%"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<FormWrapper
				sx={{
					height: "fit-content",
					marginRight: "0",
					padding: "2rem",
					borderRadius: "1rem",
				}}
			>
				<PDFViewer
					showToolbar={false}
					style={{
						width: "100%",
						aspectRatio: "3/4",
						margin: "0",
						padding: "0",
					}}
				>
					<Resume />
				</PDFViewer>
			</FormWrapper>
			<FormWrapper
				sx={{
					marginLeft: "0",
					paddingLeft: "0",
					borderRadius: "2rem",
					boxShadow: "10px 11px 0px 4px #9593FA",
					zIndex: -1,
				}}
			>
				<Stack
					direction={"column"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Typography fontSize={"3rem"} fontWeight={500}>
						Riepilogo
					</Typography>
					<FormGroup>
						<FormControlLabel
							disabled
							control={<Checkbox />}
							label="Nascondi immagine profilo"
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Nascondi nome e cognome"
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="Nascondi numero di telefono"
						/>
					</FormGroup>
					<Stack
						direction={"row"}
						justifyContent={"space-around"}
						alignItems={"center"}
						spacing={20}
					>
						<PDFDownloadLink document={<Resume />} fileName="resume.pdf">
							<Button
								sx={{
									width: "80%",
									bgcolor: "#5846FB",
									borderRadius: "2rem",
									marginTop: "1rem",
								}}
								variant="contained"
								endIcon={<DownloadRoundedIcon />}
							>
								Scarica
							</Button>
						</PDFDownloadLink>
						<Button
							sx={{
								width: "80%",
								bgcolor: "#5846FB",
								borderRadius: "2rem",
								marginTop: "1rem",
							}}
							variant="contained"
							disabled
							endIcon={<DownloadRoundedIcon />}
						>
							Salva
						</Button>
					</Stack>
				</Stack>
			</FormWrapper>
		</Stack>
	);
}
