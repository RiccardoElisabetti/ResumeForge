import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Control, Controller } from "react-hook-form";
import { FormType } from "./Context";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type FormInputProps = {
	name: any;
	control: Control<FormType, any>;
	label: string;
};

export const FormDatePicker = ({ name, control, label }: FormInputProps) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<DatePicker
						slotProps={{
							field: { clearable: true },
						}}
						label={label}
						value={value}
						format="DD/MM/YYYY"
                        onChange={onChange}
					/>
				)}
			/>
		</LocalizationProvider>
	);
};
