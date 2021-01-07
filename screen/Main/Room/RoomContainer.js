import React from "react";
import { useEffect } from "react/cjs/react.development";
import RoomPresenter from "./RoomPresenter";

export default (route) => {
  const { navigation } = route;
  const {
    route: { params },
  } = route;
  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, []);
  return <RoomPresenter roomObj={params} />;
};
