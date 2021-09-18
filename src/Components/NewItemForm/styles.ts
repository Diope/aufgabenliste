import styled from "styled-components";


export const NewItemFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 300px;
    width: 100%;
`;

export const NewItemBtn = styled.div`
    border-radius: 3px;
    border: none;
    box-shadow: none;
    text-align: center;
    padding: 6px 12px;

    color: #fff;
    background-color: #333;
`;

export const NewItemInput = styled.input`
    border-radius: 4px;
    border: none;
    font-size: 1.0rem;
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 0.50rem 1rem;
    background-color: #eee;

    &:focus {
        outline: none;
    }
`;