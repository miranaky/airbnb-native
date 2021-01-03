import { createSlice } from "@reduxjs/toolkit";
import { exp } from "react-native/Libraries/Animated/src/Easing";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import api from "../api";

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    explore: {
      page: 1,
      rooms: [],
    },
    favs: [],
  },
  reducers: {
    setExploreRooms(state, action) {
      const { explore } = state;
      const { payload } = action;
      payload.rooms.forEach((payloadRoom) => {
        const exists = explore.rooms.find(
          (savedRoom) => savedRoom.id === payloadRoom.id
        );
        if (!exists) {
          explore.rooms.push(payloadRoom);
        }
      });
      explore.page = payload.page;
    },
  },
});

const { setExploreRooms } = roomSlice.actions;

export const getRooms = () => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.rooms(); ///when get data from using axios then using `await` cause of asnyc processing
    dispatch(
      setExploreRooms({
        rooms: results,
        page: 1,
      })
    );
  } catch (e) {
    console.warn(e);
  }
};

export default roomSlice.reducer;
