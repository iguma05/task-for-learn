// обновленная задача в it one

// 1. Реализовать компонент выводящий динамический список не просроченных,
//    отсортированных по значению поля order (в порядке возрастания) записей.
// 2. Реализовать компонент выводящий уникальную строку символов
//    всех значений value  для текущего состояния списка записей.
// 3. Реализовать компонент Input с возможностью редактирования переданного значения
//    и кнопкой Удалить - удаляющей текущую запись.
// 4. Данные о записях получаются из двух асинхронных методов getItems и getItemsExpirations

// Mocked list
import { useEffect, useState } from "react";
const records = [
  { id: 11, value: "Value 1", order: 4, expired: false },
  { id: 12, value: "Value 2", order: 2, expired: true },
  { id: 13, value: "Value 3", order: 1, expired: false },
  { id: 14, value: "Value 4", order: 3, expired: false },
  { id: 15, value: "Value 5", order: 6, expired: true },
  { id: 16, value: "Value 6", order: 5, expired: false },
];

async function getItems() {
  return Promise.resolve(
    records
      .filter((item) => !item.expired)
      .map(({ id, value, order }) => ({
        id,
        value,
        order,
      }))
      .sort((a, b) => a.order - b.order)
  );
}

async function getItemsExpirations() {
  return Promise.resolve(
    records.map(({ id, expired }) => ({
      id,
      expired,
    }))
  );
}

export const ListValues = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((res) => setItems(res));
  }, []);
  return (
    <>
      <div className="card">
        <ul>
          {items && items.map((item) => <li key={item.id}>{item.value}</li>)}
        </ul>
      </div>
      <div className="card">
        <UniqLine data={items} />
        <Input />
      </div>
    </>
  );
};

const UniqLine = ({ data }) => {
  let newString = new Set();
  data
    .map((item) => item.value)
    .join("")
    .split("")
    .map((item) => newString.add(item));
  return <p>{newString}</p>;
};

const Input = () => {
  const [inputList, setInputList] = useState([]);
  const [text, setText] = useState("");
  const add = () => {
    setInputList([...inputList, text]);
    setText("");
  };
  const onDelete = (item) => {
    setInputList((state) => state.filter((element) => element !== item));
  };
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={add}>add</button>
      <ul>
        {inputList.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => onDelete(item)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
