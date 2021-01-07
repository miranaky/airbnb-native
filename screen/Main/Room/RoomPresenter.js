import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../colors";
import RoomPhotos from "../../../components/RoomPhotos";
import utils from "../../../utils";

const Container = styled.ScrollView``;

const DataContainer = styled.View`
  padding: 0px 20px;
`;

const Address = styled.Text`
  font-size: 24px;
  margin-top: 10px;
`;
const HostContainer = styled.View`
  margin-top: 10px;
  align-items: flex-start;
`;

const Superhost = styled.View`
  padding: 3px 5px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 8px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
`;
const HostText = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

const PropertyInfoContainer = styled.View`
  margin-top:20px
  flex-direction: row;
`;

const PropertyInfoData = styled.View`
  background-color: ${colors.green};
  margin-right: 10px;
  border-radius: 5px;
`;

const PropertyInfoText = styled.Text`
  color: white;
  font-weight: 500;
  padding: 5px 10px;
`;

const CheckContainer = styled.View`
  margin-top: 40px;
`;

const CheckTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckTitle = styled.Text`
  font-size: 18px;
  margin-left: 15px;
`;

const CheckTime = styled.Text`
  margin-top: 10px;
  margin-left:20px
  font-size: 16px;
`;

function formatQtt(number, name) {
  if (number === 1) {
    return `${number} ${name}`;
  } else {
    return `${number} ${name}s`;
  }
}
function formatTime(time) {
  const [hour, min, sec] = time.split(":");
  return `${hour} o'clock.`;
}

export default ({ roomObj }) => {
  return (
    <Container>
      <RoomPhotos photos={roomObj.photos} factor={2} />
      <DataContainer>
        <Address>{roomObj.address}</Address>
        <HostContainer>
          {roomObj.user.superhost ? (
            <Superhost>
              <SuperhostText>Superhost</SuperhostText>
            </Superhost>
          ) : null}
          <HostText>Host:{roomObj.user.username}</HostText>
        </HostContainer>
        <PropertyInfoContainer>
          <PropertyInfoData>
            <PropertyInfoText>
              {formatQtt(roomObj.beds, "bed")}
            </PropertyInfoText>
          </PropertyInfoData>
          <PropertyInfoData>
            <PropertyInfoText>
              {formatQtt(roomObj.bedrooms, "bedrooms")}
            </PropertyInfoText>
          </PropertyInfoData>
          <PropertyInfoData>
            <PropertyInfoText>
              {formatQtt(roomObj.bathrooms, "bathrooms")}
            </PropertyInfoText>
          </PropertyInfoData>
        </PropertyInfoContainer>
        <CheckContainer>
          <CheckTitleContainer>
            <Ionicons
              name={utils.isIos() ? "ios-timer-outline" : "md-timer-outline"}
              size={24}
            />
            <CheckTitle>Check In / Check Out</CheckTitle>
          </CheckTitleContainer>
          <CheckTime>
            {formatTime(roomObj.check_in)} / {formatTime(roomObj.check_out)}
          </CheckTime>
        </CheckContainer>
      </DataContainer>
    </Container>
  );
};
