import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return (
    <div className='notfound'>
      <h2>Sorry</h2>
      <p>That page could not be found</p>
      <Link to={"/"}>Back to Main Page...</Link>
    </div>
  );
};

export default NotFound;
