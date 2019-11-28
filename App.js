import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { BlogProvider } from "./src/context";

import Index from "./src/screens/Index";

const App = createAppContainer(
  createStackNavigator(
    {
      Index
    },
    {
      initialRouteName: "Index",
      defaultNavigationOptions: {
        title: "Blogs"
      }
    }
  )
);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
