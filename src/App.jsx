import { useState } from "react";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-5 grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Blogs
            onBookmarked={handleBookmarks}
            onMarkedAsRead={handleMarkAsRead}
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
}
