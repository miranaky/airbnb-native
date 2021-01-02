import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, StatusBar, Text, View } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import utils from "../../utils";
import api from "../../api";

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const InputContainer = styled.View`
  margin-bottom: 50px;
`;

export default ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("All fields are required!");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("Please add a valid email.");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      //create account
      const { status } = await api.createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      if (status) {
        //success
        alert("Account created. Sign in, please.");
        navigation.navigate("SignIn", { email, password });
      }
    } catch (e) {
      //failure
      alert("This email was already taken.");
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };
  return (
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
};
