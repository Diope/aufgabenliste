import { useState } from "react";
import { NewItemForm } from "../NewItemForm/NewItemForm";
import { AddItemBtn } from "./styles";


interface IAddNewItemProps {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = ({onAdd, toggleButtonText, dark}: IAddNewItemProps) => {
    const [showForm, setShowForm] = useState(false); 

    if (showForm) {
        return (
            <NewItemForm
                onAdd={(text) => {
                    onAdd(text) 
                    setShowForm(false)
                }}
            />
        )
    }

    return (
        <AddItemBtn dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemBtn>
    )
}
