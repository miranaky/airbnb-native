import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, StatusBar, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { userLogin } from "../../redux/usersSlice";
import utils from "../../utils";

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const InputContainer = styled.View`
  margin-bottom: 50px;
`;

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("All fields are required!");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Please add a valid email.");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };
  return (
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
};
