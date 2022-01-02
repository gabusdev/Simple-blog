import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setBlogs] = useState<T>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const abortCont = new AbortController();
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
    return () => abortCont.abort();
  }, [url]);

  return { data, error, isPending };
}
