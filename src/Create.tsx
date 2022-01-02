import { ChangeEvent, FunctionComponent, useState } from "react";
import { BlogModel } from "./Types";
import { useNavigate } from "react-router-dom";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handelSubmint = (e: any) => {
    e.preventDefault();
    const newBlog = { title, body, author };

    setIsPending(true);
    // console.log(newBlog);
    fetch("https://localhost:7275/blogs", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/");
      // navigate(-1)
    });
  };

  return (
    <div className='create'>
      <h2>Create a new Blogpost</h2>
      <form onSubmit={handelSubmint}>
        <label>Blog Title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>mario</option>
          <option value='luigi'>luigi</option>
          <option value='yoshi'>yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
