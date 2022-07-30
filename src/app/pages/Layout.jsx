import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { getTestData } from "../store/test/actions";

const Layout = () => {
  const dispatch = useDispatch();
  const inventories = useSelector((state) => {
    console.log("sss", state);
    return state.inventoryData.inventories;
  });
  // const [inventoryList, setInventoryList] = useState([...inventories]);

  useEffect(() => {
    // dispatch(getTestData());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>EzyInventory</h1>
      </Grid>
      <Grid item xs={12}>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Stack direction="row" spacing={1}>
            <Link class="ml-3" to="/">
              Dashboard
            </Link>
            {inventories.map(
              (inv) =>
                inv.id && inv.objType && (
                  <Link to={`/inventories/${inv.id}`}>{inv.objType}</Link>
                )
            )}
            {/* <Link to="/invoices">Invoices</Link>
            <Link to="/expenses">Expenses</Link> */}
            <Link to="/inventories">Settings</Link>
            {/* <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item> */}
          </Stack>

          {/* <Link to="/inventories/5444444">Settings</Link> */}
        </nav>
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
      {/* <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid> */}
    </Grid>
    // <div>

    // </div>
  );
};

export default Layout;
