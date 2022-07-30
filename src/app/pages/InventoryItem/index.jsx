import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
// import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { useParams } from "react-router-dom";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { ItemCard, Input } from "../../components";
import attributeTypes from "../../utils";
// import { getTestData } from "../store/test/actions";

const Inventory = () => {
  //   const dispatch = useDispatch();
  let params = useParams();
  const [s, setS] = useState();
  const [age, setAge] = React.useState("");
  console.log(params);
  //   useEffect(() => {
  //     dispatch(getTestData());
  //   }, [dispatch]);

  return (
    <div>
      <h1>Inventory Item</h1>
      <ItemCard />
      <Input
        type="number"
        value={s}
        onAction={(e) => {
          console.log(e);
          setS(e.target.value);
        }}
        inputProps={{
          endAdornment: (
            <>
              <FormControl sx={{ minWidth: 120 }} size="small">
                {/* <InputLabel id="demo-select-small">Age</InputLabel> */}
                <Select
                  // labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  variant="filled"
                  label="Age"
                  onChange={(e) => setAge(e.target.value)}
                >
                  {attributeTypes.map((type) => (
                    <MenuItem value={type.value}>{type.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          ),
        }}
      />
    </div>
  );
};

export default Inventory;
