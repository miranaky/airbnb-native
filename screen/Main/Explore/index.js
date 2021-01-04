import { connect } from "react-redux";
import { getRooms, increasePage } from "../../../redux/roomsSlice";
import ExploreContainer from "./ExploreContainer";

function mapStateToProps(state) {
  return state.roomsReducer.explore;
}

function mapDispatchToProps(dispatch) {
  return {
    getRooms: (page) => dispatch(getRooms(page)),
    increasePage: () => dispatch(increasePage()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
