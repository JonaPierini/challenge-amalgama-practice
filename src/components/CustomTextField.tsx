import { Theme } from "@emotion/react";
import { SlotProps, SxProps, TextField, TextFieldProps } from "@mui/material";

interface CustomTextFieldProps {
  sx: SxProps<Theme> | undefined;
  autoComplete: string;
  label: string;
  type: string;
  id: string;
  value: string;
  slotProps?: {
    input?: SlotProps<React.ElementType, object, TextFieldProps>;
    inputLabel?: SlotProps<React.ElementType, object, TextFieldProps>;
    htmlInput?: SlotProps<React.ElementType, object, TextFieldProps>;
    formHelperText?: SlotProps<React.ElementType, object, TextFieldProps>;
    select?: SlotProps<React.ElementType, object, TextFieldProps>;
  };
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

export const CustomTextField = ({
  sx,
  autoComplete,
  label,
  type,
  id,
  value,
  slotProps,
  onChange,
}: CustomTextFieldProps) => {
  return (
    <TextField
      sx={sx}
      autoComplete={autoComplete}
      label={label}
      type={type}
      id={id}
      value={value}
      slotProps={slotProps}
      onChange={onChange}
    />
  );
};
