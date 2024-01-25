import { PropTypes } from "prop-types";
import { TextField, FormHelperText } from "@mui/material";
import { Grid } from "@mui/material";
function TextFieldInput({
  placeholder = "",
  onChange,
  error,
  value,
  sx,
  helperText,
  rows,
  multiline = false,
  ...props
}) {
  return (
    <Grid container sx={{ position: "relative" }}>
      <TextField
        multiline={multiline}
        rows={rows}
        variant="outlined"
        sx={{
          "&:focus-within fieldset, &:focus-visible fieldset": {
            borderRadius: 0,
            border: `1px solid #3898ec !important`,
          },
          "& .MuiInputBase-root": {
            backgroundColor: "#fff !important",
            borderRadius: 0,
            ...(multiline && {
              paddingY: "8px",
            }),
          },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              // background: "white",
              border: `1px solid #ccc`,
              borderRadius: 0,
            },
            "& .MuiInputBase-input": {
              borderRadius: 0,
              ...(multiline
                ? { padding: 0 }
                : {
                    paddingY: "8px",
                  }),
            },
            "& ::placeholder": {
              fontSize: "16px !important",
              color: "#aeaeae",
              opacity: 1,
            },
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #3898ec !important", // Modify or remove as needed
            },
          },
          ...sx,
        }}
        fullWidth
        type="text"
        error={error ? true : false}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error ? (
        <FormHelperText sx={{ color: "error.main" }}>
          {helperText}
        </FormHelperText>
      ) : (
        ""
      )}
    </Grid>
  );
}

TextFieldInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  StartAdornment: PropTypes.element,
  EndAdornment: PropTypes.element,
  className: PropTypes.string,
};
export default TextFieldInput;
