import styled from "styled-components";

export const ColumnTitle = styled.div`
    font-weight: 300;
    font-size: 26px;
    padding: 6px 16px 12px;
`;
interface DragPreviewContainerProps {
    isHidden?: boolean;
    isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    opacity: ${(props) => (props.isHidden ? 0 : 1)};
    transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
    background-color: #fff;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
`;

export const CustomDragLayerContainer = styled.div`
    height: 100%;
    width: 100%;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`;

type DragPreviewWrapperProps = {
    position: {
        x: number
        y: number
    }
}

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
    ({ position: {x,y}}) => ({
        style: {
            transform: `translate(${x}px, ${y}px)`
        }
    })
)<DragPreviewWrapperProps>``