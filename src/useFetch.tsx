import { useEffect, useState } from "react";
import { BlogModel } from "./Types";

export const useFetch = (url: string) => {
  const [data, setBlogs] = useState<BlogModel[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
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
          if (err.name === "AbortError") {
            console.log("Aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 500);
    return () => abortCont.abort();
    // console.log("use effect ran");
  }, [url]);

  return { data, error, isPending };
};
