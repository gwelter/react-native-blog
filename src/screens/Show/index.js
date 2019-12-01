import React, { useContext } from "react";
import { View, Text } from "react-native";

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
