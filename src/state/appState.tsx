import { createContext, Dispatch, FC, useContext, useEffect} from "react";
import { Action } from "./actions";
import { appStateReducer, AppState, IList, ITask } from "./reducer";
import {useImmerReducer} from 'use-immer';
import { DragItem } from "src/utils/DragItem";

const AppStateContext = createContext<IAppStateContextProps>({} as IAppStateContextProps)

interface IAppStateContextProps {
    lists: IList[]
    draggedItem: DragItem | null
    getTasksByListId(id: string): ITask[]
    dispatch: Dispatch<Action>
    titleText: string
};

const appData: AppState = {
    lists: [],
    draggedItem: null,
    titleText: ""
}

const localState: AppState = JSON.parse(localStorage.getItem('globalState')!); // still not udnerstanding why ('globalState) || {} doesn't work but meh.

export const AppStateProvider: FC = ({children}) => {

    const [state, dispatch] = useImmerReducer(appStateReducer, localState || appData)
    const {lists, draggedItem, titleText} = state;
    
    useEffect(() => {
        localStorage.setItem("globalState", JSON.stringify(state))
    }, [state])

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{draggedItem, lists, getTasksByListId, dispatch, titleText }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
}