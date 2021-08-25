import {FC} from "react"
import { useAppState } from "src/state/appState"
import { AddNewItem } from "../AddNewItem/AddNewItem"
import { Card } from "../Card/Card"
import { ColumnContainer, ColumnTitle } from "./styles"



interface IColumnProps {
    text: string
    id: string
}

export const Column = ({text, id}: IColumnProps) => {
    const {getTasksByListId} = useAppState()

    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add A Task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}