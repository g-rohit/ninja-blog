// this component is reponsible to display the bloglist by mapping the available blogs along with the blog title
function BlogList({ blogs, title, handleDelete }) {


  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/* loop the blogs */}
      {blogs.length>0 ? blogs.map((eachBlog) => (
        <div className="blog-preview" key={eachBlog.id}>
          <h3>{eachBlog.title}</h3>
          <p>Written by: {eachBlog.author}</p>
          {/* directly writing function name and arguments will invoke the function and will execute when the component renders */}
          {/* <button onClick={handleDelete(eachBlog.id)}>Delete Blog</button> */}
          {/* instead use arrow function */}
          <button onClick={()=>handleDelete(eachBlog.id)}>❌ Delete Blog</button>

        </div>
      )):<button>Add a new blog post</button>}
    </div>
  );
}

export default BlogList;
