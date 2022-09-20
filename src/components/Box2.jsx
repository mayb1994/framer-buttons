import React, { useState, useEffect } from 'react';
import { JokeContainer, JokeBtnWrapper } from './Box2Elements';
import { JokeButton } from './ButtonElements';

const Box2 = () => {
const[color, setColor] = useState('blue');

useEffect(() => {
    
}, [color])


  return (
    <JokeContainer>
        <JokeBtnWrapper>
            <JokeButton onClick={() => setColor('orange')}>
                Refetch
            </JokeButton>
        </JokeBtnWrapper>
    </JokeContainer>
  )
}

export default Box2