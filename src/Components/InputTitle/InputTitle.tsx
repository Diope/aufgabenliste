import { useState } from 'react'
import {TitleComponent} from './styles'

// TODO: Move styles from AddNewItem elsewhere so AddNewItem can be used instead of making a new field

interface ITitleProps {
    titleText: string
}

export const InputTitle = ({titleText}: ITitleProps) => {
    const [showForm, setShowForm] = useState(false)

    if (showForm) {
        return (
            <h2>Test</h2>
        )
    }

    return (
        
        <div>
            <TitleComponent onClick={() => setShowForm(true)} >{titleText}</TitleComponent>
        </div>
    )
}