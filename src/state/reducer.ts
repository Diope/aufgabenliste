import { Action } from "./actions";
import {nanoid} from 'nanoid'
import { ADD_LIST, ADD_TASK, MOVE_LIST, MOVE_TASK, SET_DRAGGED_ITEM } from "./constants";
import { findItemIndexById, moveItem } from "src/utils/arrayUtils";
import { DragItem } from "src/utils/DragItem";

export interface ITask {
    id: string
    text: string
}

export interface IList {
    id: string
    text: string
    tasks: ITask[]
}

export interface AppState {
    lists: IList[]
    draggedItem: DragItem | null;
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
        case SET_DRAGGED_ITEM: {
            draft.draggedItem = action.payload
            break
        }
        case MOVE_TASK: {
            const { hoveredItemId, draggedItemId,sourceColumnId, targetColumnId } = action.payload;
            const targetListIdx = findItemIndexById(draft.lists, targetColumnId);
            const sourceListIdx = findItemIndexById(draft.lists, sourceColumnId);
            const dragIdx = findItemIndexById(draft.lists[sourceListIdx].tasks, draggedItemId);
            const hoverIdx = hoveredItemId ? findItemIndexById(draft.lists[targetListIdx].tasks, hoveredItemId) : 0;
            const movedItem = draft.lists[sourceListIdx].tasks[dragIdx];

            draft.lists[sourceListIdx].tasks.splice(dragIdx, 1)

            //add task to the target list
            draft.lists[targetListIdx].tasks.splice(hoverIdx, 0, movedItem)
            break
        }
        default: {
            break
        }
    }
}