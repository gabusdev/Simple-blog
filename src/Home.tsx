import { FunctionComponent, useState } from "react";
import BlogList from "./BlogList";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "Lorem ipsum...",
      author: "mario",
      id: "1",
    },
    {
      title: "New Flavours 2020", // Este se abre asi porq segun la extension Prettier esta linea es muy larga
      body: "Lorem ipsum...",
      author: "yoshi",
      id: "2",
    },
    {
      title: "Welcome party!",
      body: "Lorem ipsum...",
      author: "luigi",
      id: "3",
    },
    { title: "Best Blog Ever", body: "Lorem ipsum", author: "mario", id: "4" },
  ]);

  const handleDelete = (id: string) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
