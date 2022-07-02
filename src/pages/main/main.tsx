import React from "react";

import fot from '../../images/foto.png'
import bab from '../../images/logos_babel.svg'

import {
    MainWrap,
    TextWrap,
    FT
} from './style'

export const Main = () => {
    return (
        <MainWrap>
            <FT />
            <img src={fot} alt="fot"/>
            <TextWrap>gfjhgjjkbb vgcgdfgkhlk;jfdgdgd</TextWrap>
            <img src={bab} alt="babel"/>
        </MainWrap>
    )
}