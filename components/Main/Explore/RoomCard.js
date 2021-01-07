import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import utils from "../../../utils";
import colors from "../../../colors";
import { toggleFav } from "../../../redux/usersSlice";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import RoomPhotos from "../../RoomPhotos";

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
  position: relative;
`;

const Superhost = styled.View`
  padding: 3px 5px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
`;

const PriceContainer = styled.View`
  flex-direction: row;
`;

const PriceText = styled.Text`
  font-size: 14px;
`;

const PriceNumber = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 7px;
`;

const TOpacity = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 10px;
`;

const RoomCard = ({ id, name, photos, isFav, isSuperhost, price, roomObj }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <Container>
      <TOpacity onPress={() => dispatch(toggleFav(id))}>
        <Ionicons
          size={40}
          color={isFav ? colors.red : "white"}
          name={
            utils.isIos ? "ios-heart-circle-outline" : "md-heart-circle-outline"
          }
        />
      </TOpacity>
      <RoomPhotos photos={photos} />
      <TouchableOpacity
        style={{ alignItems: "flex-start" }}
        onPress={() => navigation.navigate("RoomDetail", { ...roomObj })}
      >
        {isSuperhost ? (
          <Superhost>
            <SuperhostText>Superhost</SuperhostText>
          </Superhost>
        ) : null}
        <Name>{name}</Name>
        <PriceContainer>
          <PriceNumber>${price}</PriceNumber>
          <PriceText>/ night</PriceText>
        </PriceContainer>
      </TouchableOpacity>
    </Container>
  );
};

RoomCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isFav: PropTypes.bool.isRequired,
  isSuperhost: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  isSuperhost: PropTypes.bool.isRequired,
  photo: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
  roomObj: PropTypes.object.isRequired,
};

export default RoomCard;
