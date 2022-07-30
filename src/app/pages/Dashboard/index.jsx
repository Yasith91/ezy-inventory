import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

// import { getTestData } from "../store/test/actions";

const Dashboard = () => {
  //   const dispatch = useDispatch();
  const u = uuidv4();
  //   useEffect(() => {
  //     dispatch(getTestData());
  //   }, [dispatch]);

  return (
    <div>
      <h1>Bookkeeper {u}</h1>
    </div>
  );
};

export default Dashboard;
