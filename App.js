import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context";

import Index from "./src/screens/Index";
import Show from "./src/screens/Show";
import Create from "./src/screens/Create";

const App = createAppContainer(
  createStackNavigator(
    {
      Index,
      Show,
      Create
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
    <Provider>
      <App />
    </Provider>
  );
};
