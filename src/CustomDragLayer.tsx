import { useDragLayer } from "react-dnd";
import { useAppState } from "src/state/appState";
import { Column } from "./Components/Column/Column";
import {Card} from './Components/Card/Card'

import { CustomDragLayerContainer, DragPreviewWrapper } from "./Components/Column/styles";

export const CustomDragLayer = () => {
    const {draggedItem} = useAppState()
    const {currentOffset} = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }))

    return draggedItem && currentOffset ? (
        <CustomDragLayerContainer>
            <DragPreviewWrapper position={currentOffset}>
                {draggedItem.type === "COLUMN" ? (
                    <Column
                        id={draggedItem.id}
                        text={draggedItem.text}
                        isPreview
                    />
                ) : (
                    <Card
                        columnId={draggedItem.columnId}
                        text={draggedItem.text}
                        id={draggedItem.id}
                        isPreview
                    />
                )}
            </DragPreviewWrapper>
        </CustomDragLayerContainer>
    ) : null
}
