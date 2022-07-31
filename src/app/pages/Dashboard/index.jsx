import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Inventory from "../InventoryItem";

const Dashboard = () => {
  const inventories = useSelector((state) => state.inventoryData.inventories);

  return (
    <Grid container spacing={2}>
      {inventories.map(
        (inv) =>
          inv.id &&
          inv.objType && (
            <Grid item xs={12}>
              <Divider textAlign="center">{inv.objType}</Divider>
              <Grid>
                <Inventory inventoryItemId={inv.id} />
              </Grid>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default Dashboard;
