import {useRef} from "react";
import {useDrop} from "react-dnd";

import { addTask, moveList, moveTask, setDraggedItem, deleteList } from "src/state/actions";
import { useAppState } from "src/state/appState";
import { DragItem } from "src/utils/DragItem";
import { isHidden } from "src/utils/isHidden";
import { useItemDrag } from "src/utils/useItemDrag";
import { AddNewItem } from "../AddNewItem/AddNewItem"
import { Card } from "../Card/Card"
import { CardCloseButton, ColumnContainer, ColumnTitle} from "./styles"

interface IColumnProps {
    text: string
    id: string
    isPreview?: boolean
}

export const Column = ({text, id, isPreview}: IColumnProps) => {
    const {draggedItem, getTasksByListId, dispatch} = useAppState();
    const tasks = getTasksByListId(id);
    const ref = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
        accept: ["COLUMN", "CARD"],
        hover(item: DragItem) {
            if (!draggedItem) return
            if (draggedItem.type === "COLUMN") {
                if (draggedItem.id === id) return
                dispatch(moveList(draggedItem.id, id))
            } else {
                if (draggedItem.columnId === id) return
                if (tasks.length) return

                dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id))
                dispatch(setDraggedItem({...draggedItem, columnId: id}))
            }
        } 
    })

    const {drag} = useItemDrag({type: "COLUMN", id, text})
    drag(drop(ref))

    const handleDeleteList = (id: string): void => {
        dispatch(deleteList(id));
    }

    return (
        <ColumnContainer
            isPreview={isPreview}
            ref={ref}
            isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
        >
            <CardCloseButton id="cardclosebtn" onClick={() => handleDeleteList(id)} />
            <div><ColumnTitle>{text}</ColumnTitle></div>
            {tasks.map(task => (
                <Card text={task.text} key={task.id} id={task.id} columnId={id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add A Task"
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    )
}