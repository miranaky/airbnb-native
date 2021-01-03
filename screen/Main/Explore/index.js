import { connect } from "react-redux";
import { getRooms } from "../../../redux/roomsSlice";
import ExploreContainer from "./ExploreContainer";

function mapStateToProps(state) {
  return state.roomsReducer.explore;
}

function mapDispatchToProps(dispatch) {
  return {
    getRooms: () => dispatch(getRooms()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
