import React from "react";
import { Routes as RRRoutes, Route, Outlet } from "react-router-dom";

import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Inventories from "../pages/Inventories";
import Inventory from "../pages/InventoryItem";

const Routes = () => {
  return (
    <RRRoutes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="inventories" element={<Inventories />}></Route>
        <Route
          path="inventories"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route path=":inventoryId" element={<Inventory />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Oops! There is nothing here to display</p>
            </main>
          }
        ></Route>
      </Route>
    </RRRoutes>
  );
};

export default Routes;
