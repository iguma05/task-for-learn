import { useDeferredValue } from "react";

const Subcomponent = ({ entities }) => {
  const newData = useDeferredValue(entities, { timeoutMs: 2000 });
  return (
    <ul>
      {entities.map((comment) => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Subcomponent;
