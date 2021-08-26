import { createContext, Dispatch, FC, useContext} from "react";
import { Action } from "./actions";
import { appStateReducer, AppState, List, Task } from "./reducer";
import {useImmerReducer} from 'use-immer';
import { DragItem } from "src/utils/DragItem";


const AppStateContext = createContext<IAppStateContextProps>({} as IAppStateContextProps)

interface IAppStateContextProps {
    lists: List[]
    draggedItem: DragItem | null
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{id: "89fds", text: "Diamonds Dancing"}]
        },
        {
            id: "1",
            text: "Doing",
            tasks: [{id: "f23ds", text: "Wish Wish"}]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{id: "fd932", text: "Bubble Pop Electric"}]
        }
    ],
    draggedItem: null
}

export const AppStateProvider: FC = ({children}) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const {lists, draggedItem} = state

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{draggedItem, lists, getTasksByListId, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}