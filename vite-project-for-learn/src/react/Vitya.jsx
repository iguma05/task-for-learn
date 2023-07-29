/* eslint-disable react/prop-types */
import { memo, useState } from "react";

function createList() {
  return Array.from({ length: 20 }, (_, index) => ({
    value: Math.random(),
    label: `label ${index + 1}`,
  }));
}

const App2 = () => {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState(createList);

  const handleUpdate = () => {
    // const newData = [
    //   { label: list[0].label, value: Math.random() },
    //   ...list.slice(1),
    // ];
    setList((prev) => [
      { label: prev[0].label, value: Math.random() },
      ...prev.slice(1),
    ]);
  };
  console.log("render app2");
  return (
    <div>
      <h1>Test app</h1>
      <button onClick={handleUpdate}>Update</button>
      <ul>
        {list.map((el) => (
          <CustomRow key={el.value} data={el} />
        ))}
      </ul>
    </div>
  );
};
//=================================================
// 1-ый способ записи кэшированного компонента
// const CustomRow = memo(Row);
const CustomRow = memo(function Row({ data }) {
  const { label, value } = data;
  console.log("render Row");
  return (
    <li>
      <span style={{ marginRight: "20px" }}>{label}:</span>
      <span>{value}</span>
    </li>
  );
});
//==============================================

//==============================================
// 2-ой способ записи кэшированного компонента
// const Row = memo(({ data }) => {
//   const { label, value } = data;
//   console.log("render Row");
//   return (
//     <li>
//       <span style={{ marginRight: "20px" }}>{label}:</span>
//       <span>{value}</span>
//     </li>
//   );
// });
// Row.displayName = "Row";
//================================================

export default App2;
// const root = createRoot(document.getElementById("root"));
// root.render(<App />);
