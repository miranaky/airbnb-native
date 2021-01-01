import React from "react";
import { useState } from "react";
import { StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const InputContainer = styled.View`
  margin-bottom: 50px;
`;

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username},${password}`);
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <InputContainer>
        <Input
          value={firstName}
          placeholder="First Name"
          autoCapitalize="none"
          stateFn={setFirstName}
        />
        <Input
          value={lastName}
          placeholder="Last Name"
          autoCapitalize="none"
          stateFn={setLastName}
        />
        <Input
          value={username}
          placeholder="Username"
          autoCapitalize="none"
          stateFn={setUsername}
        />
        <Input
          value={password}
          placeholder="Password"
          isPassword={true}
          stateFn={setPassword}
        />
      </InputContainer>
      <Btn onPress={handleSubmit} accent text="Sign Up" />
    </Container>
  );
};
