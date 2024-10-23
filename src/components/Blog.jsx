import { HiOutlineBookmark } from "react-icons/hi2";
export default function Blog({ blog }) {
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
          <div className="flex items-center gap-5">
            <div className="w-16 h-16">
              <img
                src={blog.author_img}
                alt={blog.author_name}
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="text-2xl font-bold">{blog.author_name}</p>
              <p className="text-base font-semibold text-gray-500">
                {blog.posted_time}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-xl font-medium text-gray-500">
              {blog.reading_time} min read
            </p>
            <HiOutlineBookmark className="text-3xl text-gray-500" />
          </div>
        </div>
        <h2 className="text-4xl font-bold">{blog.title}</h2>
        <p className="text-xl font-medium text-gray-500 pb-5">
          <span>{blog.hashtags}</span>
        </p>
        <a href="">
          <p className="text-xl font-semibold text-[#6047EC] underline">
            Mark as Read
          </p>
        </a>
      </div>
    </>
  );
}
