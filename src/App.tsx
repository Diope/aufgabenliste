import { AddNewItem } from "./Components/AddNewItem/AddNewItem";
import { Card } from "./Components/Card/Card";
import { Column } from "./Components/Column/Column";
import { useAppState } from "./state/appState";
import { Container } from "./styles";

export const App = () => {
  const {lists} = useAppState()

  return (
    <Container>
      {lists.map((list) => {
        <Column text={list.text} key={list.id} id={list.id} />
      })}
      <AddNewItem toggleButtonText="+ Add another list" dark={true} onAdd={console.log} />
    </Container>
  );
}

export default App;
