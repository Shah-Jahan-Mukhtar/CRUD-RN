import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Data from "./Component/Data";

export default function App() {
  const [create, setCreate] = useState({
    name: "",
    rollNo: "",
  });
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);

  const CreateData = () => {
    setUser([...user, create]);
    setCreate({
      name: "",
      rollNo: "",
    });

    // setCreate(null);
  };

  const EditData = (index) => {
    setCreate(user[index]);
    setEdit(true);
  };

  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            value={create.name}
            onChangeText={(text) => setCreate({ ...create, name: text })}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            keyboardType="number-pad"
            value={create.rollNo}
            onChangeText={(text) => setCreate({ ...create, rollNo: text })}
            // secureTextEntry={true}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.Button} onPress={CreateData}>
            <Text
              style={{
                fontWeight: "bold",

                fontSize: 15,
                color: "white",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text
              style={{
                fontWeight: "bold",

                fontSize: 15,
                color: "white",
              }}
            >
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text
              style={{
                fontWeight: "bold",

                fontSize: 15,
                color: "white",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
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
            {user.map((item, index) => (
              <Data key={index} Name={item.name} pwd={item.rollNo} />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TextInput: {
    width: 300,
    height: 50,
    marginTop: 20,
    padding: 10,
    elevation: 3,
    shadowOpacity: 20,
    borderRadius: 5,
  },
  Button: {
    width: 70,
    height: 45,
    marginTop: 20,
    marginRight: 10,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
