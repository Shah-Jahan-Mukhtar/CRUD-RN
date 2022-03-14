import { View, Text } from "react-native";
import React from "react";

const Data = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <View
        style={{
          width: 300,
          height: 450,
          backgroundColor: "#00bfff",

          borderRadius: 5,
        }}
      >
        <Text>{}</Text>
      </View>
    </View>
  );
};

export default Data;
