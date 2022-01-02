import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'addPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'deletePost':
      return state.filter((post) => post.id !== action.payload);
    case 'editPost':
      return state.map((post) => (post.id === action.payload.id ? action.payload : post));
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'addPost', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deletePost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'deletePost', payload: id });
  };
};

const editPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: 'editPost', payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deletePost, editPost },
  [{ title: 'Test Post', content: 'Test Content...', id: 1 }]
);
