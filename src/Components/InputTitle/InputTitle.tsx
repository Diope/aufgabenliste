
import React, { useState } from 'react'
import { useAppState } from 'src/state/appState';
import { useFocus } from 'src/utils/useFocus';
import {TitleComponent, TitleInput} from './styles'

// TODO: Move styles from AddNewItem elsewhere so AddNewItem can be used instead of making a new field

interface ITitleProps {
    onAdd(text: string): void
}

export const InputTitle = ({onAdd}: ITitleProps) => {
    const [showForm, setShowForm] = useState(false);
    const [listTitle, setListTitle] = useState("Click to Title");
    const inputRef = useFocus();
    const {titleText} = useAppState();

    const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onAdd(listTitle)
            // console.log(listTitle);
            setShowForm(false);
        }
    }

    // const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => e.target.select();

    if (showForm) {
        return (
            <TitleInput ref={inputRef} type="text" value={listTitle} onChange={(e) => setListTitle(e.target.value)} onKeyPress={handleAddText} onFocus={(e) => e.target.select()} />
        )
    }

    return (
        
        <div>
            <TitleComponent onClick={() => setShowForm(true)} >{titleText}</TitleComponent>
        </div>
    )
}