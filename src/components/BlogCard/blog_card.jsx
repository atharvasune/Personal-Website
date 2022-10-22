import Image from "mui-image";
import React from "react";
import { Button, Typography } from "@mui/material";

import "./blog_card.css"

function BlogCard({ blog }) {
  const takeToMedium = (e, blogLink) => {
    window.open(blogLink, "_blank");
  };

  return (
    <div class="blog-card-container">
      <div class="blog-card-thumbnail">
        <Image
          src={blog.image}
          width={"100%"}
          style={{
            objectFit: "cover",
            borderRadius: "8px",
            border: "1px solid rgba(100,100,100,0.4)",
          }}
        />
      </div>
      <div class="blog-card-details">
        <Typography variant="h5" fontFamily={"Space Mono"}>
          {blog.title}
        </Typography>
        <Typography variant="body" fontFamily={"Inter"}>
          {blog.description}
        </Typography>

        <Button
          variant="outlined"
          fullWidth={false}
          onClick={(e) => takeToMedium(e, blog.link)}
          style={{ width: "fit-content" }}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}

export default BlogCard;
