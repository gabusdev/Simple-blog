import { FunctionComponent, useState } from "react";
import BlogList from "./BlogList";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new Website", body: "Lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "Lorem ipsum...", author: "luigi", id: 3 },
    {
      title: "New Flavours 2022",
      body: "Lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
  ]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
