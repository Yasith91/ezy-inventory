import React, { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getTestData } from "../store/test/actions";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestData());
  }, [dispatch]);

  return (
    <div>
      <h1>EzyInventory</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Dashboard</Link> | <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/inventories">Settings</Link>
        <Link to="/inventories/5444444">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
