import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Context as BlogContext } from "../../context";

// import { Container } from './styles';

export default function Show({ navigation }) {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam("id");
  const blogPost = state.find(post => post.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
}

Show.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
        <Feather name="edit-2" size={30} />
      </TouchableOpacity>
    )
  };
};
