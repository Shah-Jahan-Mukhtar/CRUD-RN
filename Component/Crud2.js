import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";

const Crud2 = () => {
  const [add, setAdd] = React.useState();
  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TextInput style={styles.TextInput} />
        <Text>Crud2</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    width: 300,
    height: 50,
    marginTop: 20,
    padding: 10,
    elevation: 3,
    shadowOpacity: 20,
    borderRadius: 5,
  },
});

export default Crud2;
