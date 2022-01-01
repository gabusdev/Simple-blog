import { FunctionComponent, useEffect, useState } from "react";
import BlogList from "./BlogList";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      body: "Lorem ipsum...",
      author: "mario",
      id: "1",
    },
    {
      title: "New Flavours 2020", // Este se abre asi porq segun la extension Prettier esta linea es muy larga
      body: "Lorem ipsum...",
      author: "yoshi",
      id: "2",
    },
    {
      title: "Welcome party!",
      body: "Lorem ipsum...",
      author: "luigi",
      id: "3",
    },
  ]);
  const [name, setName] = useState("mario"); // Se crea para probar la funcion del Array de States a tener en cuenta con el useEffect

  const handleDelete = (id: string) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    // Se ejecuta cada vez q cambia el state o cuando se renderiza algo
    console.log("use effect ran");
    // Se puede crear un buen loop con esto al modificar aqui mismo es state
  }, [name]); // Al agregar un Array como segundo parametro a la funcion useEffect solo se ejecutara al primer rendering de la pagina
  // y cuando se cambie el valor del State que se especifique

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>Change name</button>{" "}
      {/*Solo aqui se realiza un cambio q percibe el useEffect*/}
      <p>{name}</p>
    </div>
  );
};

export default Home;
