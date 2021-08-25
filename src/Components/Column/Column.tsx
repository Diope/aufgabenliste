import {FC} from "react"
import { AddNewItem } from "../AddNewItem/AddNewItem"
import { ColumnContainer, ColumnTitle } from "./styles"

interface ColumnProps {
    text: string
}

export const Column: FC<ColumnProps> = ({text, children}) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem
                toggleButtonText="+ Add A Task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}