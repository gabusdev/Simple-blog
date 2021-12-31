import { FunctionComponent, useState } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  // let name = "mario"; //Con esta definicion la variable se cambia pero no se refleja en el DOM
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = "luigi";
    setName("luigi");
    setAge(30);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
