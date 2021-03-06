import React, { useState } from "react";
import { useFocus } from "src/utils/useFocus";
import { NewItemBtn, NewItemFormContainer, NewItemInput } from "./styles";

interface INewItemFormProps {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: INewItemFormProps) => {
    const [text, setText] = useState("")
    const inputRef = useFocus()

    const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onAdd(text)
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} onKeyPress={handleAddText} />
            <NewItemBtn onClick={() => onAdd(text)}>Create</NewItemBtn>
        </NewItemFormContainer>
    )
}