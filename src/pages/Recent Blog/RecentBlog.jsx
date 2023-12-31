
import { Skeleton } from "@chakra-ui/skeleton";
import useBlogData from "../../hooks/useBlogData";

import RecentBlogSlider from "./RecentBlogSlider";
import { ChakraProvider } from "@chakra-ui/react";

const RecentBlog = () => {
  const [, isLoaded, recentBlogs,] = useBlogData();
  const limitedBlogs = recentBlogs.slice(0, 6);
  // console.log(limitedBlogs)

  return (
    <ChakraProvider>
      {
        isLoaded ?<Skeleton height="300px"></Skeleton> : <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
       {limitedBlogs.map((blog) => (
            <RecentBlogSlider key={blog._id} isLoaded={isLoaded} blog={blog}></RecentBlogSlider>
          ))}
      </div>
        </div>
      }
    </ChakraProvider>
  );
};

export default RecentBlog;
