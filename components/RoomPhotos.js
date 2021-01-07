import React from "react";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const { height, width } = Dimensions.get("screen");

const PhotosContainer = styled.View`
  height: ${(props) => `${height / props.factor}`};
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const SlideImage = styled.Image`
width:100%
height:100%`;

const RoomPhotos = ({ photos, factor = 4 }) => (
  <PhotosContainer factor={factor}>
    {photos.length === 0 ? (
      <SlideImage
        resizeMode="repeat"
        source={require("../assets/roomDefault.jpg")}
      />
    ) : (
      <Swiper
        controlsProps={{
          PrevComponent: () => null,
          NextComponent: () => null,
          dotActiveStyle: {
            backgroundColor: "white",
          },
        }}
      >
        {photos.map((photo) => (
          <SlideImage key={photo.id} source={{ uri: photo.file }} />
        ))}
      </Swiper>
    )}
  </PhotosContainer>
);

RoomPhotos.propTypes = {
  photo: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
    })
  ),
};

export default RoomPhotos;
