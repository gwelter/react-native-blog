import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

function blogReducer(state, action) {
  switch (action.type) {
    case "GET_BLOG_POSTS":
      return action.payload;
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

function getBlogPosts(dispatch) {
  return async () => {
    const response = await jsonServer.get("/blogPosts");
    dispatch({ type: "GET_BLOG_POSTS", payload: response.data });
  };
}

function addBlogPost(dispatch) {
  return async (title, content, callback) => {
    const response = await jsonServer.post("/blogPosts", { title, content });
    dispatch({ type: "ADD_BLOG_POST", payload: response.data });
    if (callback) {
      callback();
    }
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
  { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts },
  []
);
