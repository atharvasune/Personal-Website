import React from 'react'
import { Box } from '@mui/material';
import BlogCard from '../../../components/BlogCard/blog_card';

import BlogsArray from "../../../assets/json/blogs.json";

function Blogs() {
  return (
    <Box
        component={"div"}
        style={{
          width: "100%",
          padding: "1% 1% 0 1%",
          paddingBottom: 0,
          overflowY: "auto",
          backgroundColor: "rgb(248,248,248)",
          height: "calc(100% - 2%)",
          borderBottomRightRadius: "8px",
        }}
      >
        {BlogsArray.map((val) => {
          return <BlogCard blog={val} />;
        })}
      </Box>
  )
}

export default Blogs