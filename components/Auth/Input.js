import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const { width } = Dimensions.get("screen");

const Container = styled.TextInput`
  width: ${width / 1.5}px;
  border-bottom-width: gray;
  border-bottom-width: 1px;
  padding: 15px 10px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 16px;
`;

const Input = ({
  value,
  placeholder,
  autoCapitalize,
  isPassword = false,
  stateFn,
}) => (
  <Container
    value={value}
    placeholder={placeholder}
    autoCapitalize={autoCapitalize}
    secureTextEntry={isPassword ? true : false}
    onChangeText={(text) => stateFn(text)}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  autocapitalize: PropTypes.string,
  isPassword: PropTypes.bool,
  stateFn: PropTypes.func.isRequired,
};
export default Input;
