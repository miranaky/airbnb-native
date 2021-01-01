import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const InputContainer = styled.View`
  margin-bottom: 50px;
`;

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => alert(`${username},${password}`);
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
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
          <Btn onPress={handleSubmit} accent text="Sign In" />
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
