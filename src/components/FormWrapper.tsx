import { Breakpoint, Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

type FormWrapperProps = {
	children: ReactNode;
	sx?: SxProps;
	maxWidth?: Breakpoint;
};

export function FormWrapper({
	children,
	sx,
	maxWidth = "sm",
}: FormWrapperProps) {
	return (
		<Container
			maxWidth={maxWidth}
			sx={{
				margin: "3rem",
				padding: "3rem",
				borderRadius: "4rem",
				boxShadow: "-10px 11px 0px 4px #9593FA",
				bgcolor: "white",
				...sx,
			}}
		>
			{children}
		</Container>
	);
}
