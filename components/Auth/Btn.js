import React from "react";
import { TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Button = styled.View`
  margin-top:30px;
  border: 1px solid ${(props) => (props.accent ? colors.red : colors.black)}
  border-radius:15px;
  width: ${width / 1.5}px;
  align-items: center;
  padding: 15px 0px;
  background-color: ${(props) => (props.accent ? colors.red : "transparent")};
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "white" : colors.black)};
  font-size: 16px;
  font-weight: 600;
`;

const Btn = ({ loading, onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress}>
    <Button accent={accent}>
      {loading ? (
        <ActivityIndicator color={accent ? "white" : colors.black} />
      ) : (
        <Text accent={accent}>{text}</Text>
      )}
    </Button>
  </TouchableOpacity>
);

Btn.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Btn;
