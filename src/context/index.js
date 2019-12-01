import createDataContext from "./createDataContext";

function blogReducer(state, action) {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];

    case "EDIT_BLOG_POST":
      return state.map(blogPost => {
        if (blogPost.id === action.payload.id) {
          blogPost = { ...action.payload };
        }
        return blogPost;
      });

    case "DELETE_BLOG_POST":
      return state.filter(blogpost => blogpost.id !== action.payload);

    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOG_POST", payload: { title, content } });
    callback();
  };
}

function editBlogPost(dispatch) {
  return (id, title, content, callback) => {
    dispatch({ type: "EDIT_BLOG_POST", payload: { id, title, content } });
    callback();
  };
}

function deleteBlogPost(dispatch) {
  return id => {
    dispatch({ type: "DELETE_BLOG_POST", payload: id });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  [{ id: 1, title: "teste", content: "opa" }]
);
