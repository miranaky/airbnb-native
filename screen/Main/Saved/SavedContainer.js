import React from "react";
import { useEffect } from "react/cjs/react.development";
import { getFavs } from "../../../redux/usersSlice";
import SavedPresenter from "./SavedPresenter";

export default ({ getFavs, rooms }) => {
  useEffect(() => {
    getFavs();
  }, []);
  return <SavedPresenter rooms={rooms} />;
};
