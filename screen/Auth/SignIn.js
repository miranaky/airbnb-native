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

export default ({ route: { params } }) => {
  console.log(params);
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const handleSubmit = () => alert(`${email},${password}`);
  return (
    <DismissKeyboard>
      <Container>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              stateFn={setEmail}
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
