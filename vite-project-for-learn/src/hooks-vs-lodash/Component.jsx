import { useEffect, useState, useTransition } from "react";
import Subcomponent from "./Subcomponent";

const filteredCommets = (entities, value) =>
  entities.filter((comment) =>
    comment.name.concat(comment.body).includes(value)
  );

const Component = () => {
  const [isPending, startTransition] = useTransition();
  const [text, setInput] = useState("");
  const [comments, setComments] = useState([]);

  // const value = useDeferredValue(text, { timeoutMs: 2000 });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(setComments);
  }, []);
  const handleChange = (e) => {
    startTransition(() => {
      setInput(e.target.value);
    });
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      {isPending && <h1>Rendering...</h1>}
      <Subcomponent entities={filteredCommets(comments, text)} />
    </>
  );
};

export default Component;
