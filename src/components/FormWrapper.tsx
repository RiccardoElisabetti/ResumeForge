import { Breakpoint, Container, Paper, SxProps } from "@mui/material";
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
			component={Paper}
			elevation={24}
			maxWidth={maxWidth}
			sx={{
				margin: "3rem",
				padding: "3rem",
				borderRadius: "4rem",
				boxShadow: (theme) =>
					`${theme.shadows[24]}, -10px 11px 0px 4px #9593FA`,
				bgcolor: "white",
				...sx,
			}}
		>
			{children}
		</Container>
	);
}
