// задача: написать кастомный хук useDirtyState
// вначале у которого возвращается isDirty = false
// а если хоть раз применен setState то isDirty = true
// + повесить setState на обработчик клика у increment

const useDirtyState = (initialValue = 0) => {
  return [];
};

export default function App() {
  const [state, setState, isDirty] = useDirtyState(0);

  return (
    <div className="App">
      <div>State: {state}</div>
      <div>Is state dirty: {isDirty ? "dirty" : "not dirty"}</div>
    </div>
  );
}
