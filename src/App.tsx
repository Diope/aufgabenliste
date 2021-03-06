import { AddNewItem } from "./Components/AddNewItem/AddNewItem";
import { Column } from "./Components/Column/Column";
import { CustomDragLayer } from "./CustomDragLayer";
import { addList, addTitleText } from "./state/actions";
import { useAppState } from "./state/appState";
import { Container } from "./styles";
import { InputTitle } from "./Components/InputTitle/InputTitle"
import { Footer } from "./Components/Footer/Footer";

export const App = () => {
  const {lists, dispatch} = useAppState()

  return (
    <>
        <InputTitle onAdd={(text) => dispatch(addTitleText(text))} />
        <Container>
          <CustomDragLayer />
          {lists.map((list) => (
            <Column text={list.text} key={list.id} id={list.id} />
          ))}
          <AddNewItem toggleButtonText="+ Add another list" dark={true} onAdd={(text) => dispatch(addList(text))} />
        </Container>
        <Footer />
    </>
  );
}

export default App;
