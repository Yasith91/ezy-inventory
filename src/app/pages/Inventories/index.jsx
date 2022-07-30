import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
// import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getTestData } from "../../store/test/actions";
import attributeTypes from "../../utils";
import { ItemCard, Input } from "../../components";
import { setInventoryTypes } from "../../store/inventory/actions";

const list = [
  // {
  //   objType: "test title 1",
  //   objTitle: "",
  //   fields: [
  //     { label: "ttt", type: "number" },
  //     { label: "nnn", type: "text" },
  //   ],
  // },
  // {
  //   objType: "test title 2",
  //   objTitle: "",
  //   fields: [
  //     { label: "s", type: "number" },
  //     { label: "rrr", type: "checkbox" },
  //   ],
  // },
];

const Inventories = () => {
  const dispatch = useDispatch();
  const inventories = useSelector((state) => {
    console.log("sss", state);
    return state.inventoryData.inventories;
  });
  const [inventoryList, setInventoryList] = useState([...inventories]);

  // const loggedInUser = useSelector((state) => {
  //   console.log(state);
  //   return state;
  // });
  // console.log("loggedInUser", loggedInUser);

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  useEffect(() => {
    dispatch(setInventoryTypes(inventoryList));
    // throttle(() => {
    //   // dispatch(setInventoryTypes(inventoryList));
    // }, 500);
  }, [dispatch, inventoryList]);

  const addNewField = async (index) => {
    const invList = [...inventoryList];
    invList[index].fields.push({ label: "", type: "text" });
    await setInventoryList(invList);
    // updateInventories();
  };

  const addNewType = () => {
    const invList = [...inventoryList];
    const uuid = uuidv4();
    invList.push({
      id: uuid,
      objType: "",
      objTitle: "",
      fields: [{ label: "", type: "text" }],
    });
    setInventoryList(invList);
    // updateInventories();
  };

  const removeItem = (index) => {
    const invList = [...inventoryList];
    invList.splice(index, 1);
    setInventoryList(invList);
    // setInterval(updateInventories(), 3000);
  };

  const onValueChange = (e, index, index2, attribute) => {
    const value = e.target.value;
    const invList = [...inventoryList];
    if (index2 !== null) {
      invList[index].fields[index2][attribute] = value;
    } else {
      invList[index][attribute] = value;
    }
    setInventoryList(invList);
    // updateInventories();
  };

  const renderContent = (data, index) => {
    console.log(data.fields);
    return (
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            label="Type"
            value={data.objType}
            onAction={(e) => onValueChange(e, index, null, "objType")}
          />
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Title
            </InputLabel>
            <Select
              sx={{ width: "95%", "& > div": { p: 1 } }}
              id="demo-select-small"
              value={data.objTitle}
              variant="standard"
              size="small"
              label="dsdsd"
              displayEmpty
              onChange={(e) => onValueChange(e, index, null, "objTitle")}
            >
              {data.fields.map(
                (field) =>
                  field?.label && (
                    <MenuItem value={field.label}>{field.label}</MenuItem>
                  )
              )}
            </Select>
          </FormControl>
          {/* <Input
          label="Title"
          value={data.objTitle}
          onAction={(e) => onValueChange(e, index, null, "objTitle")}
        /> */}
          {data.fields.map((obj, fieldIndex) => (
            <Input
              label="Field Name"
              sx={{ width: "95%" }}
              onAction={(e) => onValueChange(e, index, fieldIndex, "label")}
              inputProps={{
                endAdornment: (
                  <>
                    {/* <FormControl sx={{ minWidth: 120 }} size="small"> */}
                    <Select
                      sx={{ "& > div": { p: 1 } }}
                      id="demo-select-small"
                      value={obj.type}
                      variant="filled"
                      size="small"
                      label="Age"
                      onChange={(e) =>
                        onValueChange(e, index, fieldIndex, "type")
                      }
                    >
                      {attributeTypes.map((type) => (
                        <MenuItem value={type.value}>{type.label}</MenuItem>
                      ))}
                    </Select>
                    {/* </FormControl> */}
                  </>
                ),
              }}
              value={obj.label}
            />
          ))}
          <Button
            variant="outlined"
            sx={{ width: "100%", mt: 1 }}
            startIcon={<AddIcon />}
            onClick={() => addNewField(index)}
          >
            Add Field
          </Button>
        </Box>
      </div>
    );
  };

  console.log("inventoryList", inventoryList);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Grid container>
        <Grid item xs={12}>
          <Fab
            aria-label="add"
            color="primary"
            variant="extended"
            onClick={addNewType}
          >
            <AddIcon /> Add New Item
          </Fab>
        </Grid>
        {inventoryList.map((inventory, index) => (
          <Grid sx={{ m: 1 }} item lg={2} xs={12}>
            <ItemCard
              title={inventory.objType}
              content={renderContent(inventory, index)}
              onAction={() => removeItem(index)}
            />
          </Grid>
        ))}
        {/* <Grid item lg={3} xs={12}>
          <ItemCard />
        </Grid>
        <Grid item lg={3} xs={12}>
          <ItemCard />
        </Grid>
        <Grid item lg={3} xs={12}>
          <ItemCard />
        </Grid>
        <Grid item lg={3} xs={12}>
          <ItemCard />
        </Grid> */}
      </Grid>
    </Box>
    // <div>
    //   <h1>inventories</h1>
    //   <Link
    //     style={{ display: "block", margin: "1rem 0" }}
    //     to={`/inventories/4444`}
    //   >
    //     test
    //   </Link>
    //   <Outlet />
    // </div>
  );
};

export default Inventories;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';

// export default function FloatingActionButtons() {
//   return (
//     <Box sx={{ '& > :not(style)': { m: 1 } }}>
//       <Fab color="primary" aria-label="add">
//         <AddIcon />
//       </Fab>
//       <Fab color="secondary" aria-label="edit">
//         <EditIcon />
//       </Fab>
//       <Fab variant="extended">
//         <NavigationIcon sx={{ mr: 1 }} />
//         Navigate
//       </Fab>
//       <Fab disabled aria-label="like">
//         <FavoriteIcon />
//       </Fab>
//     </Box>
//   );
// }
