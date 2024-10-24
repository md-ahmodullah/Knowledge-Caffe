import { useEffect, useState } from "react";
import Blog from "./Blog";
export default function Blogs({ onBookmarked, onMarkedAsRead }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog_data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          onBookmarked={onBookmarked}
          onMarkedAsRead={onMarkedAsRead}
        />
      ))}
    </div>
  );
}
