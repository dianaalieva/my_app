import React from "react";

import fot from '../../images/foto.png'
import jenkins from '../../images/logos_jenkins.svg'
import postgres from '../../images/logos_postgresql.svg'
import nodemon from '../../images/logos_nodemon.svg'
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
    Paragraph
} from './style'

export const Main = () => {
    return (
        <>
            <Contain>
                <img src={fot} alt="fot"/>
                <div>
                    <Paragraph>
                        Добрый день!
                    </Paragraph>
                    <Paragraph>
                        Меня зовут Диана, я - frontend developer, представляю Вам своё приложение - резюме.
                    </Paragraph>
                    <Paragraph>
                        В примерах Вы увидите ссылку на результат работы в команде, 
                        где я разработала страницу с карточками покупок ( вёрстка, логика, API - запросы, манипуляции с базой данных ) , 
                        а также вёрстку для страницы добавления категорий.
                        В данном проекте мы использовали MongoDB в виде Docker Image, 
                        а в запросах к серверу - RTK Query.
                    </Paragraph>
                    <Paragraph>
                        В качестве личного ПЭТ - проекта я представляю мини - игру на время, в которой предусмотрена авторизация и рейтинг игроков.
                    </Paragraph>
                    <Paragraph>
                        Ниже представлены технологи, задействованные в обоих приложениях.
                    </Paragraph>
                </div>
            </Contain>
            <ContainSmall>
                <img src={jenkins} alt="jenkins"/>
                <img src={docker} alt="docker"/>
                <img src={webpack} alt="webpack"/>
                <img src={html} alt="html"/>
                <img src={css} alt="css"/>
                <img src={jest} alt="jest"/>
                <img src={typescript} alt="typescript"/>
                <img src={bitbucket} alt="bitbucket"/>
                <img src={postgres} alt="postgres"/>
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
                <img src={nodemon} alt="nodemon"/>
                <img src={figma} alt="figma"/>
            </ContainSmall>
            
        </>
    )
}