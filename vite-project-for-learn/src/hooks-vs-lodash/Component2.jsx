import debounce from "lodash.debounce";
import { useEffect, useState } from "react";

const Component2 = () => {
  const [text, setInput] = useState("");
  const [label, setLabel] = useState("");
  useEffect(() => {
    handle();
  }, [text]);

  const handle = debounce(() => {
    setLabel(text);
  }, 2000);

  // const deferredText = debounce(cb, 2000);
  // console.log(deferredText());
  return (
    <>
      <input value={text} onChange={(e) => setInput(e.target.value)} />
      <p>{label}</p>
    </>
  );
};

export default Component2;
