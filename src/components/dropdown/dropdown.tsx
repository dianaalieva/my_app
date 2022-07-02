import React from "react";
import { Link } from "react-router-dom";

import { Drop } from './style'

type DropdownProps = {
    color: string;
};

export const Dropdown: React.FC<DropdownProps> = ({color}) => {
    return (
        <Drop color={color}>
            <div><Link to="/example/game">Game</Link></div>
            <div><Link to="/example/shop">Shop</Link></div>
            <div><Link to="/example/auth">Auth</Link></div>
        </Drop>
    )
}