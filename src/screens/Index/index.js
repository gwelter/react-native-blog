import React, { useContext } from "react";
import { Text, FlatList } from "react-native";
import BlogContext from "../../context";

import { Container } from "./styles";

export default function Index() {
  const blogPosts = useContext(BlogContext);

  return (
    <Container>
      <FlatList
        data={blogPosts}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </Container>
  );
}
