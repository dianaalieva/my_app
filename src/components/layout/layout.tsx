import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';

import { HeadLink, Example, ThemeButton, Drop, NavLink, DropsRow, DropOutside, DropBlock } from './style'
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
                                <img src={arrow} alt="примеры"/> 
                            </Example>
                            {showMenu && ( 
                                <Drop>
                                    <NavLink to="/example/game"><DropsRow>Game</DropsRow></NavLink>
                                    <NavLink to="/example/shop"><DropsRow>Shop</DropsRow></NavLink>
                                    <NavLink to="/example/auth"><DropsRow>Auth</DropsRow></NavLink>
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