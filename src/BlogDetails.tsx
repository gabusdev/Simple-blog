import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlogModel } from "./Types";
import { useFetch } from "./useFetch";

interface BlogDetailsProps {}
const BlogDetails: FunctionComponent<BlogDetailsProps> = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch<BlogModel>(`https://localhost:7275/blogs/${id}`);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("https://localhost:7275/blogs/" + blog?.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            <i>Writen by {blog.author}</i>
          </p>
          <hr />
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
