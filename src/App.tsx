import { FC } from "react";
import { AddNewItem } from "./Components/AddNewItem/AddNewItem";
import { Card } from "./Components/Card/Card";
import { Column } from "./Components/Column/Column";
import { Container } from "./styles";


export const App: FC = ({children}) => {
  return (
    <Container>
      <Column text="To Do">
        <Card text="Finish resume updates" />
      </Column>
      <Column text="In Progress">
        <Card text="Daily German studies" />
      </Column>
      <Column text="Done">
        <Card text="Cleaned out car" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </Container>
  );
}

export default App;
