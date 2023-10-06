import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

function reducer(state, action) {
  switch (action.type) {
    case('getBlobPosts'):
      return action.payload
    case ('editBlogPost'):
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      })
    case ('deleteBlogPost'):
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
}

function getBlogPosts(dispatch) {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({type: 'getBlobPosts', payload: response.data})
  }
}

function addBlogPost() {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', {
      title,
      content
    })
    callback();
  };
}

function editBlogPost(dispatch) {
  return async (title, content, id, callback) => {
    jsonServer.put(`/blogposts/${id}`,
      {
        title,
        content
      }
    )
    dispatch({type: 'editBlogPost', payload: {title, content, id}});
    callback();
  }
}

function deleteBlogPost(dispatch) {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`,)
    dispatch({type: 'deleteBlogPost', payload: id})
  }
}

export const {Context, Provider} = createDataContext(reducer, {
  getBlogPosts,
  addBlogPost,
  deleteBlogPost,
  editBlogPost
}, [])
