import createDataContext from "./createDataContext";

function blogReducer(state, action) {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: `Blogpost #${state.length + 1}`
        }
      ];

    case "DELETE_BLOG_POST":
      return state.filter(blogpost => blogpost.id !== action.payload);

    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };
}

function deleteBlogPost(dispatch) {
  return id => {
    dispatch({ type: "DELETE_BLOG_POST", payload: id });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
