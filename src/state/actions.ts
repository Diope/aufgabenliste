import { DragItem } from "src/utils/DragItem"
import { ADD_LIST, ADD_TASK, MOVE_LIST, SET_DRAGGED_ITEM } from "./constants"

export type Action = | 
    {type: "ADD_LIST", payload: string} | 
    {type: "ADD_TASK", payload: {text: string, listId: string}} | 
    {type: "MOVE_LIST", payload: {draggedId: string, hoverId: string}} |
    {type: "SET_DRAGGED_ITEM", payload: DragItem | null }

export const addTask = (
    text: string,
    listId: string
): Action => ({
    type: ADD_TASK,
    payload: {
        text,
        listId
    }
})

export const addList = (
    text: string
): Action => ({
    type: ADD_LIST,
    payload: text
})

export const moveList = (
    draggedId: string,
    hoverId: string
): Action => ({
    type: MOVE_LIST,
    payload: {
        draggedId,
        hoverId
    }
})

export const setDraggedItem = (
    draggedItem: DragItem | null
): Action => ({
    type: SET_DRAGGED_ITEM,
    payload: draggedItem
})