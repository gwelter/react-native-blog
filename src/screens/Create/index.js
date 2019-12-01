import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import { Context as BlogContext } from "../../context";

// import { Container } from './styles';

export default function Create({ navigation }) {
  const { addBlogPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button
        disabled={!title || !content}
        title="Add blog post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.goBack();
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    marginBottom: 15,
    padding: 5
  },
  label: {
    fontSize: 20,
    margin: 5
  }
});
