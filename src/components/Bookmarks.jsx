export default function Bookmarks({ bookmarks, readingTime }) {
  return (
    <>
      <div className="mb-3 bg-gray-200 rounded-lg p-5">
        <p className="text-center text-[#6047EC] font-bold text-xl">
          Spent time on read : <br /> {readingTime}
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg p-5 min-h-svh">
        <h1 className="font-bold text-xl pb-4">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, index) => (
          <p
            className="font-semibold text-lg p-5 mb-4 bg-white rounded-lg"
            key={index}
          >
            {bookmark.title}
          </p>
        ))}
      </div>
    </>
  );
}
