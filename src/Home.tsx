import { FunctionComponent, useEffect, useState } from "react";
import BlogList from "./BlogList";
import { BlogModel } from "./Types";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://localhost:7275/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from resource");
          }

          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError("");
        })
        .catch((err: Error) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
    // console.log("use effect ran");
  }, []);

  return (
    <div className='home'>
      {isPending && <div>Loading...</div>}
      {!isPending && <BlogList blogs={blogs} title='All Blogs!' />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
