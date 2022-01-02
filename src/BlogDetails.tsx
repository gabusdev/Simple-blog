import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

interface BlogDetailsProps {}
const BlogDetails: FunctionComponent<BlogDetailsProps> = () => {
  const { id } = useParams();

  return (
    <div className='blog-details'>
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
