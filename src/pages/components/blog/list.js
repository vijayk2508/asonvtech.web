import React, { useEffect, useState } from "react";
import { Blogdata } from "../../../constants/generaldata";
import BlogCard from "./card";

function BlogList() {
  const [blogarray, setBlogArray] = useState([]);

  useEffect(() => {
    setBlogArray(Blogdata);
  }, []);

  return (
    <div class="row">
      {blogarray.map((blog, key) => {
        return <BlogCard key={key} {...blog} />;
      })}
    </div>
  );
}

export default BlogList;
