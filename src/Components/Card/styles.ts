import styled from "styled-components";
import {GrFormClose} from 'react-icons/gr'

interface DragPreviewContainerProps {
    isHidden?: boolean;
    isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
    transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
    opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

export const CardContainer = styled(DragPreviewContainer)`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-family: "Open San", sans-serif;
    font-size: 15px;
    color: #9E9595;

    max-width: 300px;
    margin-bottom: 0%.5rem;
    padding: 0.75rem 1rem;
    border-radius: 3px 3px 0px 0px;

    background-color: #fff;
    box-shadow: #091e4240 0px 0.5px 0px 0px;
`;

export const CloseButton = styled(GrFormClose)`
    transition: all 300ms ease-in-out;
    color: #454545;
    opacity: 0.25;

    &:hover {
        opacity: 1.0;
    }
`;
