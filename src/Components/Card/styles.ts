import styled from "styled-components";

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

    max-width: 300px;
    margin-bottom: 0%.5rem;
    padding: 0.5rem 1rem;
    border-radius: 3px 3px 0px 0px;

    background-color: #fff;
    box-shadow: #091e4240 0px 0.5px 0px 0px;
`;