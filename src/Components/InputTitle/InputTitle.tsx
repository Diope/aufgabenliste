
import React, { useState } from 'react'
import { useAppState } from 'src/state/appState';
import { useFocus } from 'src/utils/useFocus';
import {TitleComponent, TitleInput} from './styles'

// TODO: Move styles from AddNewItem elsewhere so AddNewItem can be used instead of making a new field

interface ITitleProps {
    onAdd(text: string): void
}

export const InputTitle = ({onAdd}: ITitleProps) => {
    const [showForm, setShowForm] = useState(true);

    const [listTitle, setListTitle] = useState("");
    const inputRef = useFocus();
    const {titleText} = useAppState();

    const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onAdd(listTitle);
            setShowForm(true);
        }
    }


    if (showForm === false) {
        return (
            <TitleInput 
                ref={inputRef} 
                type="text" 
                value={listTitle} 
                onChange={(e) => setListTitle(e.target.value)} 
                onKeyPress={handleAddText}
                onFocus={(e) => e.target.select()}
            />
        )
    }


    return (
        <div>
            <TitleComponent 
                onClick={() => setShowForm(false)}
            >{titleText === "" ? "Click to Edit Title" : titleText}</TitleComponent>
        </div>
    )

}