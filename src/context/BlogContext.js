import createDataContext from './createDataContext';

function reducer(state, action) {
  switch (action.type) {
    case ('addBlogPost'):
      return [...state, {title: `Blog post Number ${state.length + 1}`}];
    default:
      return state;
  }
}

function addBlogPost(dispatch) {
  return () => {
    dispatch({type: 'addBlogPost'});
  };
}

export const {Context, Provider} = createDataContext(reducer, {addBlogPost}, [])
