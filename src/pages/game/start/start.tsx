import React from "react";

import {
    TimerBlock,
    Wrapper,
    Screen
} from './style'

export const Start = () => {
    return (
        <>
            <Screen>
                Выберите время
                <Wrapper>
                    <div>
                        <TimerBlock to={'/example/game'}>30 sec</TimerBlock>
                    </div>
                    <div>
                        <TimerBlock to={'/example/game'}>1 min</TimerBlock>
                    </div>
                </Wrapper>
            </Screen>
        </>
    )
}