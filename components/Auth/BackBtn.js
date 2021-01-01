import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const isIos = Platform.OS === "ios";

const Container = styled.View`
  padding-left: 20px;
`;

export default () => (
  <Container>
    <Ionicons name={isIos ? "ios-arrow-back" : "md-arrow-back"} size={28} />
  </Container>
);
