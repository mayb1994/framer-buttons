import styled from 'styled-components';
import { motion } from "framer-motion";

export const JokeContainer = styled(motion.div)`
    color: #060606;
    display: flex;
    justify-content: center;
    margin: 750px;
    width: 200px;
    box-shadow: 0 3px 30px 15px rgb(0 0 0 / 0.2);
    border-radius: 0.75rem;
    background: rgb(0,18,36);
    background: radial-gradient(circle, rgba(0,18,36,0) 0%, rgba(106,208,49,0.5802696078431373) 100%);
`;

export const JokeBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
