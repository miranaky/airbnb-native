import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: flex-start;
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
const PhotosContainer = styled.View`
  height: ${height / 4};
  width: 100%;
  margin-bottom: 10px;
`;

const SlideImage = styled.Image`
width:100%
height:100%`;

const RoomCard = ({ id, name, photos, isFav, isSuperhost, price }) => {
  return (
    <Container>
      <PhotosContainer>
        {photos.length === 0 ? (
          <SlideImage
            resizeMode="repeat"
            source={require("../../../assets/roomDefault.jpg")}
          />
        ) : (
          <Swiper>
            {photos.map((photo) => (
              <SlideImage key={photo.id} source={{ uri: photo.file }} />
            ))}
          </Swiper>
        )}
      </PhotosContainer>
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
};

export default RoomCard;
