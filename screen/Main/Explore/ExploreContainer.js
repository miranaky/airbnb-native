import React from "react";
import { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";

export default ({ getRooms, page, rooms }) => {
  useEffect(() => {
    getRooms();
  }, []);
  return <ExplorePresenter rooms={rooms} page={page} />;
};
