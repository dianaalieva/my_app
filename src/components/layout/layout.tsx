import React, { useContext } from "react";
import { Outlet } from 'react-router-dom';
import { Dropdown } from "../dropdown/dropdown";
import { ThemeContext } from "@emotion/react";

import { HeadMenu, HeadLink, Example, DropWrap } from './style'
import arrow from '../../images/Vector.svg'

type LayoutProps = {
    handleChangeTheme: () => void
}

export const Layout = ({ handleChangeTheme } : LayoutProps) => {

    const { color, title } = useContext(ThemeContext)

    return (
        <>
            <header>
                <HeadMenu>
                    <button onClick={handleChangeTheme}>click</button>
                    <HeadLink to="/">ОБО МНЕ</HeadLink>
                    <Example>
                        ПРИМЕРЫ РАБОТ
                        <img src={arrow} alt="примеры"/>
                        <DropWrap>
                            <Dropdown color="red"/>
                        </DropWrap>
                        
                    </Example>
                    <HeadLink to="/contacts">КОНТАКТЫ</HeadLink>
                    
                </HeadMenu>
            </header>
            <Outlet />
            <footer>
                <HeadMenu>Благодарю за внимание!</HeadMenu>
            </footer>
        </>
    )
}