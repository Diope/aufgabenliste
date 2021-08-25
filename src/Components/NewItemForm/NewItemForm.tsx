import { useState } from "react";
import { NewItemBtn, NewItemFormContainer, NewItemInput } from "./styles";

interface INewItemFormProps {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: INewItemFormProps) => {
    const [text, setText] = useState("")

    return (
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={(e) => setText(e.target.value)}/>
            <NewItemBtn onClick={() => onAdd(text)}>Create</NewItemBtn>
        </NewItemFormContainer>
    )
}