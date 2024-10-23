import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-5">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}
