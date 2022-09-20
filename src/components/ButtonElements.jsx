import styled from "styled-components";
import {Link} from 'react-scroll';

export const JokeButton = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#fe9ed7' : '#010606')};
    white-space: nowrap;
    padding: 12px 30px;
    margin: 30px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#fe9ed7')};
    }
    `;