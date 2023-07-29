/* eslint-disable */

import React, { useState, useEffect } from "react";

const DataList = ({ queryParameter }) => {
  const [data, setData] = useState();

  useEffect(async () => {
    setData(await fetchDataFromServer(queryParameter));
  });

  return (
    <div>
      {data.map((dataElement) => (
        <div>{dataElement}</div>
      ))}
    </div>
  );
};
