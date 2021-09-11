import { DragItem } from "src/utils/DragItem"
import { ADD_LIST, ADD_TASK, ADD_TITLE_TEXT, DELETE_LIST, DELETE_TASK, MOVE_LIST, MOVE_TASK, SET_DRAGGED_ITEM } from "./constants"

export type Action = | 
    {type: "ADD_LIST", payload: string} | 
    {type: "ADD_TASK", payload: {text: string, listId: string}} | 
    {type: "MOVE_LIST", payload: {draggedId: string, hoverId: string}} |
    {type: "SET_DRAGGED_ITEM", payload: DragItem | null } |
    {type: "MOVE_TASK", payload: 
        {draggedItemId: string, hoveredItemId: string | null, sourceColumnId: string, targetColumnId: string}
    } |
    {type: "DELETE_TASK", payload: {sourceColumnId: string, targetItemId: string}} |
    {type: "DELETE_LIST", payload: {sourceColumnId: string}} |
    {type: "ADD_TITLE_TEXT", payload: string}


// LISTS
export const addList = (
    text: string
): Action => ({
    type: ADD_LIST,
    payload: text
});

export const deleteList = (
    sourceColumnId: string,
): Action => ({
    type: DELETE_LIST,
    payload: {sourceColumnId}
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

// TASKS

export const deleteTask = (
    sourceColumnId: string,
    targetItemId: string
): Action => ({
    type: DELETE_TASK,
    payload: {sourceColumnId, targetItemId}
});

export const addTask = (
    text: string,
    listId: string
): Action => ({
    type: ADD_TASK,
    payload: {
        text,
        listId
    }
});

export const moveTask = (
    draggedItemId: string,
    hoveredItemId: string | null,
    sourceColumnId: string,
    targetColumnId: string
): Action => ({
    type: MOVE_TASK,
    payload: {
        draggedItemId,
        hoveredItemId,
        sourceColumnId,
        targetColumnId,
    }
});

export const addTitleText = (
    text: string
): Action => ({
    type: ADD_TITLE_TEXT,
    payload: text
});