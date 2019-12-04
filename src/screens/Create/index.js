import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";

import BlogPostForm from "../../components/BlogPostForm";
import { Context as BlogContext } from "../../context";

export default function Create({ navigation }) {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => navigation.navigate("Index"))
      }
    />
  );
}

const styles = StyleSheet.create({});
