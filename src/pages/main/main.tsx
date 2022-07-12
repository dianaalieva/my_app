import React from "react";

import fot from '../../images/foto.png'
import bab from '../../images/logos_babel.svg'
import docker from '../../images/logos_docker-icon.svg'
import webpack from '../../images/logos_webpack.svg'
import html from '../../images/vscode-icons_file-type-html.svg'
import css from '../../images/vscode-icons_file-type-css.svg'
import jest from '../../images/vscode-icons_file-type-jest.svg'
import typescript from '../../images/logos_typescript-icon.svg'
import bitbucket from '../../images/vscode-icons_file-type-bitbucketpipeline.svg'
import figma from '../../images/logos_figma.svg'
import git from '../../images/logos_git-icon.svg'
import redux from '../../images/logos_redux.svg'
import react from '../../images/logos_react.svg'
import postman from '../../images/logos_postman-icon.svg'
import trello from '../../images/logos_trello.svg'
import js from '../../images/vscode-icons_file-type-js-official.svg'
import github from '../../images/iconoir_github-outline.svg'
import jira from '../../images/fa-brands_jira.svg'
import { Contain, ContainSmall } from '../../components/container'

import {
    TextWrap
} from './style'

export const Main = () => {
    return (
        <>
            <Contain>
                <img src={fot} alt="fot"/>
                <TextWrap>gfjhgjjkbb vgcgdfgkhlk;jfdgdgd</TextWrap>
            </Contain>
            <ContainSmall>
                <img src={bab} alt="babel"/>
                <img src={docker} alt="docker"/>
                <img src={webpack} alt="webpack"/>
                <img src={html} alt="html"/>
                <img src={css} alt="css"/>
                <img src={jest} alt="jest"/>
                <img src={typescript} alt="typescript"/>
                <img src={bitbucket} alt="bitbucket"/>
                <img src={figma} alt="figma"/>
            </ContainSmall>
            <ContainSmall>      
                <img src={git} alt="git"/>
                <img src={redux} alt="redux"/>
                <img src={react} alt="react"/>
                <img src={postman} alt="postman"/>
                <img src={trello} alt="trello"/>
                <img src={js} alt="js"/>
                <img src={github} alt="github"/>
                <img src={jira} alt="jira"/>
            </ContainSmall>
        </>
    )
}