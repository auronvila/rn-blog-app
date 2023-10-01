import createDataContext from './createDataContext';

function reducer(state, action) {
  switch (action.type) {
    case ('deleteBlogPost'):
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case ('addBlogPost'):
      return [...state, {
        id: Math.floor(Math.random() * 9999),
        title: action.payload.title,
        content: action.payload.content
      }];
    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return (title, content, callback) => {
    dispatch({type: 'addBlogPost', payload: {title, content}});
    callback();
  };
}

function deleteBlogPost(dispatch) {
  return (id) => {
    dispatch({type: 'deleteBlogPost', payload: id})
  }
}

export const {Context, Provider} = createDataContext(reducer, {addBlogPost, deleteBlogPost}, [])
