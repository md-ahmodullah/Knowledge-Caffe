import { HiMiniBookmark } from "react-icons/hi2";
export default function Blog({ blog, onBookmarked, onMarkedAsRead }) {
  return (
    <>
      <div className="space-y-4  mb-5 border-b-2">
        <div className="">
          <img
            src={blog.cover_img}
            alt={blog.title}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-14 lg:h-14">
              <img
                src={blog.author_img}
                alt={blog.author_name}
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-lg md:text-2xl font-bold">
                {blog.author_name}
              </p>
              <p className="text-xs md:text-base font-semibold text-gray-500">
                {blog.posted_time}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-sm md:text-xl font-medium text-gray-500">
              {blog.reading_time} min read
            </p>
            <HiMiniBookmark
              className="text-xl md:text-3xl text-blue-500 cursor-pointer"
              onClick={() => onBookmarked(blog)}
            />
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold">{blog.title}</h2>
        <p className="text-base md:text-xl font-medium text-gray-500 pb-5">
          <span>{blog.hashtags}</span>
        </p>
        <button
          className="text-base md:text-xl font-semibold text-[#6047EC] underline pb-5"
          onClick={() => onMarkedAsRead(blog.reading_time, blog.id)}
        >
          Mark as Read
        </button>
      </div>
    </>
  );
}
