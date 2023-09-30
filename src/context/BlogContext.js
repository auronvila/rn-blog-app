import React, {useState} from 'react'


const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  const [blogPost, setBlogPost] = useState([])

  function addBlogPost() {
    setBlogPost([...blogPost, {title: `Blog Post Number ${blogPost.length + 1}`}]);
  }

  return (
    <BlogContext.Provider value={{data: blogPost, addBlogPost: addBlogPost}}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;