import { FunctionComponent, MouseEvent } from "react";

interface HomeProps {}

const handleClick = () => {
  console.log("Hello World");
};

const handleAgain = (name: string) => {
  console.log(`Hello Mr.${name}`);
};

const handleEventTest = (t: string, e: any) => {
  console.log(`El valor de t es ${t} y\nLa un dato es: ${e.timeStamp}`);
  console.log(typeof e);
};

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleAgain("John")}>Click Again</button>
      <button onClick={(e) => handleEventTest("test", e)}>Event Test</button>
    </div>
  );
};

export default Home;
