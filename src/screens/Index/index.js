import React, { useContext } from "react";
import { Text, FlatList, Button } from "react-native";
import { Context as BlogContext } from "../../context";

import { Container } from "./styles";

export default function Index() {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <Container>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </Container>
  );
}
