import { createContext, Dispatch, FC, useContext} from "react";
import { Action } from "./actions";
import { appStateReducer, AppState, List, Task } from "./reducer";
import {useImmerReducer} from 'use-immer';


const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

interface AppStateContextProps {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

// interface Task {
//     id: string
//     text: string
// }

// interface List {
//     id: string
//     text: string
//     tasks: Task[]
// }

// export interface AppState {
//     lists: List[]
// }

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
    ]
}

export const AppStateProvider: FC = ({children}) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)

    const {lists} = state

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{lists, getTasksByListId, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}