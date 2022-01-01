import { FunctionComponent } from "react";
import Blog from "./Blog";

interface BlogListProps {
  blogs: Array<any>;
  title: string;
}

const BlogList: FunctionComponent<BlogListProps> = ({ blogs, title }) => {
  // const blogs = props.blogs; // Se puede usar asi llamando al parametro prop o como lo hice ahora

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <Blog
          id={blog.id}
          title={blog.title}
          author={blog.author}
          body={blog.body}
        />
      ))}
    </div>
  );
};

export default BlogList;
