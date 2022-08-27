import React from "react";
import Lottie from 'lottie-react'

import ExampleLottie from '../../../animations/Example_lottie.json'
import {
    GameLink,
    ScreenGame,
    ExampleGame,
    GameTitle,
    LinksWrapper
    
} from './style'

export const Example = () => {
    return (
        <>
            <GameTitle>Простая и увлекательная игра на время</GameTitle>
            <ScreenGame>
                Собери как можно больше кружочков, установи рекорд!
                <ExampleGame>
                    <Lottie animationData={ ExampleLottie } /> 
                </ExampleGame>
            </ScreenGame>
            <LinksWrapper>
                <GameLink to="/example/game">Начать игру</GameLink>
                <GameLink to="/example/game/raiting">Посмотреть рейтинг</GameLink>
            </LinksWrapper>      
            
        </>
    )
}