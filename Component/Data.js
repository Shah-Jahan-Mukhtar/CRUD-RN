import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Data = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 50,
            backgroundColor: "white",
            justifyContent: "space-between",
            alignItems: "center",

            borderRadius: 5,
            flexDirection: "row",
            marginBottom: 10,
            elevation: 8,
            opacity: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                marginRight: 25,
                fontSize: 20,
                color: "black",
              }}
            >
              Name: {props.Name}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginRight: 25,
                fontSize: 20,
                color: "black",
              }}
            >
              RollNo:{props.pwd}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Data;
