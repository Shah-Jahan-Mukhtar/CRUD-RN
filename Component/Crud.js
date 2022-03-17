import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Crud = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const [item, setItem] = useState();

  const addUser = useCallback(() => {
    setUsers([...users, user]);
    setUser({
      name: "",
      age: "",
    });
  }, [user, users]);
  const handleEditUser = useCallback(
    (indx) => {
      setUser(users[indx]);
      setIsEdit(true);
      setIndex(indx);
    },
    [user, users, index, isEdit]
  );
  const updateUser = useCallback(() => {
    let edit = users;
    edit[index] = user;
    setUsers([...edit]);
    setIsEdit(false);
    setUser({
      name: "",
      age: "",
    });
  }, [users, user, setUsers]);
  const deleteUser = useCallback(
    (indx) => {
      let filterObj = users.filter((item, ind) => ind != indx);
      console.log(filterObj);
      setUsers(filterObj);
      setUser({
        name: "",
        age: "",
      });
    },
    [user, users, setUsers]
  );

  return (
    <View style={style.container}>
      <Text style={style.header}>Crud</Text>
      <TextInput
        style={style.inputS}
        placeholder="name"
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
      />
      <TextInput
        style={style.inputS}
        placeholder="age"
        keyboardType="number-pad"
        value={user.age}
        onChangeText={(text) => setUser({ ...user, age: text })}
      />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={style.button}
          onPress={() => (isEdit ? updateUser() : addUser())}
          disabled={!(user.name && user.age)}
        >
          <Text style={style.buttonTxt}>{isEdit ? "Update" : "Add"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => deleteUser(index)}
          style={style.button}
          key={index}
        >
          <Text style={style.buttonTxt}>Delete</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={style.list}>
        {users.map((item, index) => (
          <TouchableOpacity
            style={style.listBox}
            key={index}
            onPress={() => {
              handleEditUser(index), setItem(item);
            }}
          >
            <Text>Name : {item.name}</Text>
            <Text>Age : {item.age}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  inputS: {
    width: "80%",
    padding: 10,
    backgroundColor: "grey",
    fontSize: 24,
    margin: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "black",
    alignItems: "center",
    margin: 10,
  },
  buttonTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  listBox: {
    width: "70%",
    padding: 20,
    margin: 10,
    backgroundColor: "grey",
  },
  list: {
    width: "100%",
    height: 30,
    backgroundColor: "lightblue",
  },
});
export default Crud;
