import { useEffect, useState } from "react";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog_data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <></>;
}
