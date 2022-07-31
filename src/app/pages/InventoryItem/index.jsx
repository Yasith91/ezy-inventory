import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { ItemCard, Input } from "../../components";
import attributeTypes from "../../utils";
import { setInventoryItem } from "../../store/inventory/actions";
import { debounce } from "lodash";

const Inventory = ({ inventoryItemId }) => {
  const dispatch = useDispatch();
  const inventoryId = useParams().inventoryId || inventoryItemId;
  const inventories = useSelector((state) => state.inventoryData.inventories);
  const inventoryItems = useSelector(
    (state) => state.inventoryData.inventoryItems
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inventoryList = inventoryItems ? inventoryItems[inventoryId] : [];
  const [items, setItems] = useState(inventoryList || []);
  const [fields, setFields] = useState([]);
  const [selectedInventory, setInventory] = useState();

  // useEffect(() => {
  //   // console.log("init ===", items);
  //   console.log(items, inventoryId);
  //   if (!items) return;
  //   // items.length > 0 &&
  //   dispatch(setInventoryItem({ [inventoryId]: items }));
  // }, [dispatch, inventoryId, items]);

  useEffect(() => {
    setItems(inventoryList);
  }, [inventoryId]);

  useEffect(() => {
    const inventory = inventories.find((data) => data.id === inventoryId);
    setFields(getFields(inventory.fields));
    setInventory(inventory);
  }, [inventories, inventoryId]);

  const onValueChange = (e, index, attributeName, elementType = null) => {
    const value =
      elementType === attributeTypes[2].value
        ? e.target.checked
        : e.target.value;
    const itemsClone = [...items];
    console.log(JSON.stringify(items));
    console.log(JSON.stringify(itemsClone));
    itemsClone[index][attributeName] = value;
    setItems(itemsClone);
    console.log(e, index, attributeName, elementType);
    dispatch(setInventoryItem({ [inventoryId]: itemsClone }));
  };

  const pickField = (field, item, index) => {
    const type = field.type;
    const attributeName = field.label.toLowerCase();
    const value = item[attributeName];
    switch (type) {
      // number
      case attributeTypes[0].value:
        return (
          <Input
            sx={{ width: "95%" }}
            label={field.label}
            type={type}
            value={value}
            onAction={(e) => onValueChange(e, index, attributeName)}
          />
        );
      // Date Picker
      case attributeTypes[1].value:
        return (
          <Input
            id="date"
            sx={{ width: "95%" }}
            label={field.label}
            type={type}
            value={value}
            onAction={(e) => onValueChange(e, index, attributeName)}
          />
        );
      // Check box
      case attributeTypes[2].value:
        return (
          <FormControlLabel
            sx={{ width: "95%" }}
            control={<Checkbox defaultChecked checked={value} />}
            label={field.label}
            value={value}
            onChange={(e) => onValueChange(e, index, attributeName, type)}
          />
        );
      default:
        return (
          <Input
            sx={{ width: "95%" }}
            label={field.label}
            type={type}
            value={value}
            onAction={(e) => onValueChange(e, index, attributeName)}
          />
        );
    }
  };

  const renderContent = (item, index) => {
    return (
      <>
        {selectedInventory?.fields?.map((field) =>
          pickField(field, item, index)
        )}
      </>
    );
  };

  const getFields = (fields) => {
    let obj = {};
    fields?.map((filed) => {
      obj[filed.label.toLowerCase()] = "";
      return null;
    });
    return obj;
  };

  const addNewItem = debounce(() => {
    const itemsClone = items ? [...items] : [];
    itemsClone.push({ ...fields });
    setItems(itemsClone);
    dispatch(setInventoryItem({ [inventoryId]: itemsClone }));
  }, 500);

  const removeItem = (index) => {
    const itemsClone = [...items];
    itemsClone.splice(index, 1);
    setItems(itemsClone);
    dispatch(setInventoryItem({ [inventoryId]: itemsClone }));
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Grid container>
        <Grid item xs={12}>
          <Fab
            aria-label="add"
            color="primary"
            variant="extended"
            onClick={addNewItem}
          >
            <AddIcon /> Add New Item
          </Fab>
        </Grid>
        {items?.map((item, index) => (
          <Grid sx={{ m: 1 }} item lg={2} xs={12}>
            <ItemCard
              title={`${selectedInventory?.objType} - ${
                item[selectedInventory?.objTitle.toLowerCase()]
              }`}
              content={renderContent(item, index)}
              onAction={() => removeItem(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Inventory;
