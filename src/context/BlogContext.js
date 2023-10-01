import createDataContext from './createDataContext';

function reducer(state, action) {
  switch (action.type) {
    case ('deleteBlogPost'):
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case ('addBlogPost'):
      return [...state, {id: Math.floor(Math.random() * 9999), title: `Blog post Number ${state.length + 1}`}];
    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return () => {
    dispatch({type: 'addBlogPost'});
  };
}

function deleteBlogPost(dispatch) {
  return (id) => {
    dispatch({type: 'deleteBlogPost', payload: id})
  }
}

export const {Context, Provider} = createDataContext(reducer, {addBlogPost, deleteBlogPost}, [])
