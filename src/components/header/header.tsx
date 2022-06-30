import React from "react";

import { 
    Wrap,
    HeadMenu
} from './style'

export const Header = () => {
    return (
        <Wrap>
            <HeadMenu>ОБО МНЕ</HeadMenu>
            <HeadMenu>ПРИМЕРЫ РАБОТ</HeadMenu>
            <HeadMenu>КОНТАКТЫ</HeadMenu>
        </Wrap>
    )
}