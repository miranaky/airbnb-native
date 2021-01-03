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

export default ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  handleSubmit,
}) => (
  <DismissKeyboard>
    <Container>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView behavior="position">
        <InputContainer>
          <Input
            value={firstName}
            placeholder="First Name"
            autoCapitalize="words"
            stateFn={setFirstName}
          />
          <Input
            value={lastName}
            placeholder="Last Name"
            autoCapitalize="words"
            stateFn={setLastName}
          />
          <Input
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            stateFn={setEmail}
          />
          <Input
            value={password}
            placeholder="Password"
            isPassword={true}
            stateFn={setPassword}
          />
        </InputContainer>
        <Btn loading={loading} onPress={handleSubmit} accent text="Sign Up" />
      </KeyboardAvoidingView>
    </Container>
  </DismissKeyboard>
);
