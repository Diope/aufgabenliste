import { Action } from "./actions";
import {nanoid} from 'nanoid'
import { ADD_LIST, ADD_TASK, MOVE_LIST } from "./constants";
import { findItemIndexById, moveItem } from "src/utils/arrayUtils";

export interface Task {
    id: string
    text: string
}

export interface List {
    id: string
    text: string
    tasks: Task[]
}

export interface AppState {
    lists: List[]
}

export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
    switch (action.type) {
        case ADD_LIST: {
            draft.lists.push({
                id: nanoid(),
                text: action.payload,
                tasks: []
            })
            break
        }
        case ADD_TASK: {
            const {text, listId} = action.payload
            const targetListIndex = findItemIndexById(draft.lists, listId)

            draft.lists[targetListIndex].tasks.push({
                id: nanoid(),
                text
            })
            break
        }
        case MOVE_LIST: {
            const {hoverId,draggedId} = action.payload;
            const dragIdx = findItemIndexById(draft.lists, draggedId)
            const hoverIdx = findItemIndexById(draft.lists, hoverId)
            draft.lists = moveItem(draft.lists, dragIdx, hoverIdx)
            break
        }
        default: {
            break
        }
    }
}