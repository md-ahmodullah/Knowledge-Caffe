import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-5 grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <Blogs />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Bookmarks />
        </div>
      </div>
    </>
  );
}
