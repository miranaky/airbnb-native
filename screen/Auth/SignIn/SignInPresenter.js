import React from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import styled from "styled-components/native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const InputContainer = styled.View`
  margin-bottom: 50px;
`;

export default ({ email, setEmail, password, setPassword, handleSubmit }) => (
  <DismissKeyboard>
    <Container>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView behavior="position">
        <InputContainer>
          <Input
            value={email}
            placeholder="Email"
            keyboardType="email-address"
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
