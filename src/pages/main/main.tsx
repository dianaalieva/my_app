import React from "react";

import fot from '../../images/foto.png'
import bab from '../../images/logos_babel.svg'

import {
    MainWrap,
    TextWrap,
    FotoWrap
} from './style'

export const Main = () => {
    return (
        <MainWrap>
            <FotoWrap>
                <img src={fot} alt="fot"/>
            </FotoWrap>
            <TextWrap>gfjhgjjkbb vgcgdfgkhlk;jfdgdgd</TextWrap>
            <img src={bab} alt="babel"/>
        </MainWrap>
    )
}