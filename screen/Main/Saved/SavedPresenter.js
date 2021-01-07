import React from "react";
import styled from "styled-components/native";
import RoomCard from "../../../components/Main/Explore/RoomCard";

const Container = styled.View`
  margin-top: 70px;
  padding: 0px 15px;
`;

const Title = styled.Text`
  font-size: 38px;
  margin-bottom: 10px;
`;

const SView = styled.ScrollView``;

const NoFavs = styled.Text``;

export default ({ rooms }) => (
  <Container>
    <Title>Favourites({rooms.length})</Title>
    <SView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      {rooms.length !== 0 ? (
        rooms.map((room) => (
          <RoomCard
            key={room.id}
            name={room.name}
            price={room.price}
            id={room.id}
            isFav={room.is_fav}
            photos={room.photos}
            isSuperhost={room.user.superhost}
            roomObj={room}
          />
        ))
      ) : (
        <NoFavs>You don't have any favs.</NoFavs>
      )}
    </SView>
  </Container>
);
