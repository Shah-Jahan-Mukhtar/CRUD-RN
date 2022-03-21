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
  var chk = false;
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
      chk = false;
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
    chk = false;
  }, [users, user, setUsers]);
  const deleteUser = useCallback(
    (indx) => {
      var filterObj = users.filter((item, ind) => ind != indx);

      // console.log(chk);
      setUsers(filterObj);
      setUser({
        name: "",
        age: "",
      });
      chk = false;
    },
    [user, users, setUsers]
  );

  return (
    <View style={style.container}>
      <Text style={style.header}>Crud</Text>
      <TextInput
        style={style.inputS}
        placeholder="Name"
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
      />
      <TextInput
        style={style.inputS}
        placeholder="Age"
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
          disabled={!(user.name && user.age)}
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
              chk = true;
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
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    fontSize: 24,
    margin: 10,
    elevation: 10,
    borderRadius: 20,
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
