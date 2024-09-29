import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NameInput from "./components/NameInput";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(["Name A", "Name B"]);

  // TODO - use immer
  const addItem = (item: string) => {
    if (items.includes(item)) {
      console.log(`Items already contains element ${item}`);
      return;
    }

    setItems([...items, item]);
  };

  const removeName = (name: string) => {
    setItems(items.filter((item) => item !== name));
  };

  return (
    <>
      <NameInput onClick={addItem} />
      <ListGroup items={items} onClick={removeName} />
    </>
  );
}

export default App;
