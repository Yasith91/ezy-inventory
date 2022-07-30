import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

// import { getTestData } from "../store/test/actions";

const Inventories = () => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getTestData());
  //   }, [dispatch]);

  return (
    <div>
      <h1>inventories</h1>
      <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={`/inventories/4444`}
      >
        test
      </Link>
      <Outlet />
    </div>
  );
};

export default Inventories;
