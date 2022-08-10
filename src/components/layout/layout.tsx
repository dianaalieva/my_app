import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';

import { HeadLink, Example, ThemeButton, Drop, NavLink, Nav, DropsRow, DropOutside, DropBlock, ImgArrow } from './style'
import { Contain } from '../container'
import arrow from '../../images/arrowDropdown.svg'
import light from '../../images/light.svg'

type LayoutProps = {
    handleChangeTheme: () => void
}

export const Layout = ({ handleChangeTheme } : LayoutProps) => {
    const [showMenu, setShowMenu] = useState(false);
    

    function handleClick () {
        if (showMenu) {
            setShowMenu(false)
        }
    }

    function handleMenuClick () {
        setShowMenu(true);

        setTimeout(() => {
            setShowMenu(false);
        }, 10000);     
    }
    useEffect(() => {
        return () => clearTimeout();
    }, []);

    return (
        <>
            <DropOutside onClick={handleClick}>
                <header>
                    <Contain>
                        <HeadLink to="/">ОБО МНЕ</HeadLink>
                        <DropBlock>
                            <Example onClick={handleMenuClick}>
                                ПРИМЕРЫ РАБОТ
                                <ImgArrow src={arrow} alt="примеры"/> 
                            </Example>
                            {showMenu && ( 
                                <Drop>
                                    <NavLink to="/example/game"><DropsRow>Личный ПЭТ - проект</DropsRow></NavLink>
                                    <Nav href="https://b1.inno-js.ru/basket" target="_blank"><DropsRow>Командная разработка</DropsRow></Nav>
                                </Drop>
                            )}                            
                        </DropBlock>  
                        <HeadLink to="/contacts">КОНТАКТЫ</HeadLink>
                        <ThemeButton onClick={handleChangeTheme}>
                            <img src={light} alt="тема"/>
                        </ThemeButton>
                    </Contain>
                </header>
                <Outlet />
                <footer>
                    <Contain>Благодарю за внимание!</Contain>
                </footer>
            </DropOutside>
        </>
    )
}