import { useRef } from "react"
import { useDrop } from "react-dnd"
import { moveTask, setDraggedItem } from "src/state/actions"
import { useAppState } from "src/state/appState"
import { isHidden } from "src/utils/isHidden"
import { useItemDrag } from "src/utils/useItemDrag"
import { CardContainer } from "./styles"


interface ICardProps {
    text: string
    id: string
    columnId: string
    isPreview?: boolean
}

export const Card = ({text, id, columnId, isPreview}: ICardProps) => {
    const {draggedItem, dispatch} = useAppState()
    const ref = useRef<HTMLDivElement>(null)

    const {drag} = useItemDrag({
        type: "CARD",
        id,
        text,
        columnId
    })

    const [, drop] = useDrop({
        accept: "CARD",
        hover() {
            if (!draggedItem) return
            if (draggedItem.type !== "CARD") return
            if (draggedItem.id === id) return
            dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId))
        }
    })

    drag(drop(ref))

    return (
        <CardContainer
            isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
            isPreview={isPreview}
            ref={ref}
        >
            {text}
        </CardContainer>
    )
}