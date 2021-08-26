import { AddNewItem } from "./Components/AddNewItem/AddNewItem";
import { Column } from "./Components/Column/Column";
import { CustomDragLayer } from "./CustomDragLayer";
import { addList } from "./state/actions";
import { useAppState } from "./state/appState";
import { Container } from "./styles";

export const App = () => {
  const {lists, dispatch} = useAppState()

  return (
    <Container>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" dark={true} onAdd={(text) => dispatch(addList(text))} />
    </Container>
  );
}

export default App;
