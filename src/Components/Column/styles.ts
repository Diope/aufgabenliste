import styled from "styled-components";
import {RiCloseCircleFill} from 'react-icons/ri'

export const ColumnTitle = styled.div`
    font-family: 'Work San', sans-serif;
    font-weight: 300;
    color: #000;
    font-size: 30px;
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
    transition: all 300ms ease-in-out;
    cursor: pointer;
    background-color: #fff;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;

        &:hover {
            box-shadow: 0px 4px 11px -9px rgba(0, 0, 0, 0.50);
        }

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

export const CardCloseButton = styled(RiCloseCircleFill)`
    transition: all 300ms ease-in-out;
    opacity: 0.35;
    position: right;

    &:hover {
        opacity: 1;
    }
`;