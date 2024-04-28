import { FormWrapper } from "../FormWrapper";
import { Stack } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import { Resume } from "../Resume";
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
					height: "80%",
					marginRight: "0",
					paddingRight: "0",
					// bgcolor: "blue",
				}}
			>
				<PDFViewer showToolbar={false} height="100%" width="100%">
					<Resume />
				</PDFViewer>
			</FormWrapper>
			<FormWrapper
				sx={{
					marginLeft: "0",
					paddingLeft: "0",
					boxShadow: "10px 11px 0px 4px #9593FA",
					zIndex: -1,
				}}
			>
				<h1>hello</h1>
			</FormWrapper>
		</Stack>
		// <fieldset>
		// 	<legend>Summary</legend>
		// 	<p>Here's a summary of your information:</p>
		// 	{/* Display data from previous forms (implementation depends on your state management) */}
		// 	<ul>
		// 		<li>Name: {/* Display retrieved name */}</li>
		// 		<li>Email: {/* Display retrieved email */}</li>
		// 		{/* ... and so on for other fields */}
		// 	</ul>
		// 	{/* Optionally, provide a button for form submission */}
		// 	<button style={{ display: "block" }}>
		// 		<Link to="/form/history">back</Link>
		// 	</button>
		// </fieldset>
	);
}
