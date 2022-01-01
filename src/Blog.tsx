import { FunctionComponent } from "react";
import { BlogModel } from "./Types";

interface BlogProps {
  blog: BlogModel;
  handleDelete: Function;
}

// Las siguientes dos lineas son igula de funcionales, solo hay q descomentar
// la declaracion de la constante blog
// y llamar los valores desde ese objeto blog
// const Blog: FunctionComponent<BlogProps> = (props) => {
const Blog: FunctionComponent<BlogProps> = ({ blog, handleDelete }) => {
  // const blog = props;

  return (
    <div className='blog-preview' key={blog.id}>
      <h3>{blog.title} </h3>
      <p>Written by {blog.author}</p>
      <button onClick={() => handleDelete(blog.id)}>delete blog</button>
    </div>
  );
};

export default Blog;
