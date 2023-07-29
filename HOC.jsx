const CustomComponent = () => {
  return <div>Custom Component</div>;
};
const Component = <CustomHOC element={CustomComponent} />;

const CustomHOC = ({ Element }) => {
  console.log(Element.props);
  return Element;
};

//======================================================

import React, { useEffect, useState } from "react";
const [data, setData] = useState([]);

function Component() {
  useEffect(() => {
    fetch("url")
      .then((res) => res.json())
      .then(setData);
    return () => {};
  });

  return (
    <div>
      HOC
      <button>click</button>
    </div>
  );
}

export default Component;
