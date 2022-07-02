import React from "react";
import { Outlet } from 'react-router-dom';
import { Dropdown } from "../dropdown/dropdown";

import { HeadMenu, HeadLink, Example, DropWrap } from './style'
import arrow from '../../images/Vector.svg'

export const Layout = () => {
    return (
        <>
            <header>
                <HeadMenu>
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