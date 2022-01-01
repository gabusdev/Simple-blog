import { FunctionComponent, useState } from "react";

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
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h3>{blog.title} </h3>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
