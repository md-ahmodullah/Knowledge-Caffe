import { useEffect, useState } from "react";
import Blog from "./Blog";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog_data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl">{blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
