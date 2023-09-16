import CategoriesSlider from "@/components/categories/CategoriesSlider";
import HomeSlider from "@/components/homeslider/HomeSlider";
import LatestBlog from "@/components/latestblog/LatestBlog";
import React from "react";

function Home() {
  return (
    <div>
      <HomeSlider />
      <CategoriesSlider />
      <LatestBlog />
    </div>
  );
}

export default Home;
