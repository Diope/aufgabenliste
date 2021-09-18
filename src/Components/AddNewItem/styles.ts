import styled from "styled-components";

interface IAddItemBtnProp {
    dark?: boolean
}


export const AddItemBtn = styled.button<IAddItemBtnProp>`
    border: none;
    border-radius: 1px 1px 2px 2px;
    cursor: pointer;
    padding: 10px 12px;
    text-align: left;
    max-width: 300px;
    width: 100%;
    font-size: 1.0rem;

    transition: all 300ms ease-in-out;
    
    color: ${props => (props.dark ? "#666" : "#fff")};
    background-color: #ffffff3d;
    &:hover {
        background-color: #ffffffb2;
        color: #000;
    }
`;
