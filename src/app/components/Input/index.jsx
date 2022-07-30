import * as React from "react";
// import { Link, Outlet } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import NavigationIcon from "@mui/icons-material/Navigation";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

import MenuItem from "@mui/material/MenuItem";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import PropTypes from "prop-types";

const ItemCard = ({
  label,
  inputProps,
  onAction,
  value,
  inputType,
  helperText,
  variant,
  ...props
}) => {
  return (
    <TextField
      label={label}
      defaultValue="Default Value"
      value={value}
      helperText={helperText}
      type={inputType}
      variant={variant}
      size="small"
      InputProps={inputProps}
      onChange={onAction}
      {...props}
    />
    // <FormControl variant="standard">
    //   <InputLabel>{label}</InputLabel>
    //   <Input
    //     id="component-error"
    //     value={value}
    //     size="small"
    //     type={inputType}
    //     onChange={onAction}
    //     aria-describedby="component-error-text"
    //     endAdornment={
    //       endAdornment
    //       //   <>
    //       //     {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
    //       //         <InputLabel id="demo-simple-select-standard-label">
    //       //           Age
    //       //         </InputLabel> */}
    //       //     {/* <Select
    //       //       variant="filled"
    //       //       labelId="demo-simple-select-standard-label"
    //       //       id="demo-simple-select-standard"
    //       //       value={value}
    //       //       onChange={onAction}
    //       //       label="Age"
    //       //       size="small"
    //       //     >
    //       //       <MenuItem value="">
    //       //         <em>None</em>
    //       //       </MenuItem>
    //       //       <MenuItem value={10}>Ten</MenuItem>
    //       //       <MenuItem value={20}>Twenty</MenuItem>
    //       //       <MenuItem value={30}>Thirty</MenuItem>
    //       //     </Select> */}
    //       //     {/* </FormControl> */}
    //       //   </>
    //     }
    //   />
    //   <FormHelperText>{helperText}</FormHelperText>
    // </FormControl>
  );
};

ItemCard.propTypes = {
  label: PropTypes.string,
  onAction: PropTypes.func.isRequired,
  endAdornment: PropTypes.any,
  value: PropTypes.string,
  inputType: PropTypes.string,
  helperText: PropTypes.string,
  variant: PropTypes.string,
};

ItemCard.defaultProps = {
  label: "",
  endAdornment: "",
  value: "",
  inputType: "text",
  helperText: "",
  variant: "standard",
};

export default ItemCard;
