import { useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  function handleDelete(id) {
    // console.log(id);
    // console.log(blogs.filter((eachBlog) => eachBlog.id !== id));
    // we are filtering the blog by saying match the id on which the delete button has been clicked with the id of each blog and makinng is falsy value will return all the other blogs for which ID is not matching 
    const newBlogs = blogs.filter((eachBlog) => eachBlog.id !== id);
    setBlogs(newBlogs);

  }

  return (
    <div className="home">
      <BlogList
        title="Welcome to my blog site"
        blogs={blogs}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
