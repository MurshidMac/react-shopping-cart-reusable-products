import styled from 'styled-components';

export const ButtonContainer=  styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border-radius: 0.25rem;
    cursor: pointer;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:#f4c430;

    }
    &:focus{
        outline: none;
    }
`
