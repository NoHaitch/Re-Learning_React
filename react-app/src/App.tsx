import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  let items = ["New York", "Sans Francisco", "Tokyo", "London", "Paris"];

  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello There !</Alert>
      )}
      <br />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <br />
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Press Me!
      </Button>
    </div>
  );
}

export default App;
