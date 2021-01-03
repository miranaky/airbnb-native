import React from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import RoomCard from "../../../components/Main/Explore/RoomCard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export default ({ rooms }) => {
  return (
    <Container>
      <ScrollView
        style={{ marginTop: 120, width: "100%" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {rooms.lengt === 0 ? (
          <ActivityIndicator color="black" />
        ) : (
          rooms.map((room) => (
            <RoomCard
              key={room.id}
              name={room.name}
              price={room.price}
              id={room.id}
              isFav={room.is_fav}
              photos={room.photos}
              isSuperhost={room.user.superhost}
            />
          ))
        )}
      </ScrollView>
    </Container>
  );
};
