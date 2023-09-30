import React, {useReducer, useState} from 'react'


const BlogContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case ('addBlogPost'):
      return [...state, {title: `Blog post Number ${state.length + 1}`}];
    default:
      return state;
  }
}

export const BlogProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, [])

  function addBlogPost() {
    dispatch({type: 'addBlogPost'})
  }

  return (
    <BlogContext.Provider value={{data: state, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;