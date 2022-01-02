// import { FunctionComponent, useEffect, useState } from "react";
import { FunctionComponent } from "react";
import BlogList from "./BlogList";
import { BlogModel } from "./Types";
import { useFetch } from "./useFetch";
// import { BlogModel } from "./Types";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch<BlogModel[]>("https://localhost:7275/blogs");

  return (
    <div className='home'>
      {isPending && <div>Loading...</div>}
      {!isPending && blogs && <BlogList blogs={blogs} title='All Blogs!' />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
