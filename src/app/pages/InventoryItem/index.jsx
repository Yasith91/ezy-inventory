import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemCard } from "../../components";
// import { getTestData } from "../store/test/actions";

const Inventory = () => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getTestData());
  //   }, [dispatch]);

  return (
    <div>
      <h1>Inventory Item</h1>
      <ItemCard />
    </div>
  );
};

export default Inventory;
