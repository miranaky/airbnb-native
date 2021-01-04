import React from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import RoomCard from "../../../components/Main/Explore/RoomCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

const FakeBar = styled.View`
  height: 40px;
  width: 100%;
  background-color: white;
  margin: 80px 0px 10px 0px;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 8px;
  justify-content: center;
  padding-left: 15px;
`;

const FakeText = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;

export default ({ rooms }) => {
  return (
    <Container>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          <FakeBar>
            <FakeText>Search...</FakeText>
          </FakeBar>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 30 }}
          >
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                name={room.name}
                price={room.price}
                id={room.id}
                isFav={room.is_fav}
                photos={room.photos}
                isSuperhost={room.user.superhost}
              />
            ))}
          </ScrollView>
        </>
      )}
    </Container>
  );
};
