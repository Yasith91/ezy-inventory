import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import attributeTypes from "../../utils";
import { ItemCard, Input } from "../../components";
import { setInventoryTypes } from "../../store/inventory/actions";

const Inventories = () => {
  const dispatch = useDispatch();
  const inventories = useSelector((state) => state.inventoryData.inventories);
  const [inventoryList, setInventoryList] = useState([...inventories]);

  useEffect(() => {
    dispatch(setInventoryTypes(inventoryList));
  }, [dispatch, inventoryList]);

  const addNewField = async (index) => {
    const invList = [...inventoryList];
    invList[index].fields.push({ label: "", type: "text" });
    await setInventoryList(invList);
  };

  // Add new type with dummy data
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
  };

  // Remove type
  const removeItem = (index) => {
    const invList = [...inventoryList];
    invList.splice(index, 1);
    setInventoryList(invList);
  };

  // Handle all the change values here 
  const onValueChange = (e, index, index2, attribute) => {
    const value = e.target.value;
    const invList = [...inventoryList];
    if (index2 !== null) {
      invList[index].fields[index2][attribute] = value;
    } else {
      invList[index][attribute] = value;
    }
    setInventoryList(invList);
  };

  const renderContent = (data, index) => {
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
          {data.fields.map((obj, fieldIndex) => (
            <Input
              label="Field Name"
              sx={{ width: "95%" }}
              onAction={(e) => onValueChange(e, index, fieldIndex, "label")}
              inputProps={{
                endAdornment: (
                  <>
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
      </Grid>
    </Box>
  );
};

export default Inventories;
