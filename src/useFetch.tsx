import { useEffect, useState } from "react";
import { BlogModel } from "./Types";

export const useFetch = (url: string) => {
  const [data, setBlogs] = useState<BlogModel[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from that resource");
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
  }, [url]);

  return { data, error, isPending };
};
