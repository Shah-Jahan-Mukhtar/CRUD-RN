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
  const [add, setAdd] = useState({
    name: "",
    rollNo: "",
  });
  const [user, setUser] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const [item, setItem] = useState();
  const CreateData = () => {
    setUser([...user, add]);
    setAdd({
      name: "",
      rollNo: "",
    });

    // setCreate(null);
  };

  const EditData = (ind) => {
    setAdd(user[index]);
    setisEdit(true);
    setIndex(ind);
  };

  const UpdateData = () => {
    let Edit = user;
    Edit[index] = add;
    setUser([...Edit]);
    setisEdit(false);
    setAdd({
      name: "",
      rollNo: "",
    });
  };

  const DeleteData = (ind) => {
    let filterObj = user.filter((item, inde) => inde != ind);
    setUser(filterObj);
    setAdd({
      name: "",
      rollNo: "",
    });
  };

  return (
    <SafeAreaView style={{ marginTop: 25 }}>
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            value={add.name}
            onChangeText={(text) => setAdd({ ...add, name: text })}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            keyboardType="number-pad"
            value={add.rollNo}
            onChangeText={(text) => setAdd({ ...add, rollNo: text })}
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
          {/* <TouchableOpacity style={styles.Button} onPress={CreateData}>
            <Text
              style={{
                fontWeight: "bold",

                fontSize: 15,
                color: "white",
              }}
            >
              Add
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.Button}
            onPress={() => (isEdit ? UpdateData() : CreateData())}
            disabled={!(add.name && add.rollNo)}
          >
            <Text
              style={{
                fontWeight: "bold",

                fontSize: 15,
                color: "white",
              }}
            >
              {isEdit ? "Update" : "Add"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => DeleteData(index)}
            key={index}
          >
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
              <TouchableOpacity
                key={index}
                onPress={() => {
                  EditData(index), setItem(item);
                }}
              >
                <Data Name={item.name} pwd={item.rollNo} />
              </TouchableOpacity>
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
