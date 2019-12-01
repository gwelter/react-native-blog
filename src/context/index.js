import createDataContext from "./createDataContext";

function blogReducer(state, action) {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `Blogpost #${state.length + 1}` }];

    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
