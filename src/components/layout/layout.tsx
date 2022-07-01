import React from "react";
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                <Link to="/">ОБО МНЕ</Link>
                <Link to="/contacts">КОНТАКТЫ</Link>
            {/* <HeadMenu><Link to="/">ПРИМЕРЫ РАБОТ</Link></HeadMenu> */}
            </header>
            <Outlet />
            <footer>Благодарю за внимание!</footer>
        </>
    )
}