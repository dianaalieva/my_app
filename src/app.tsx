import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, Global } from '@emotion/react'

import { Main } from './pages/main/main'
import { Contacts } from './pages/contacts/contacts'
import { Layout } from "./components/layout/layout";
import { Game } from "./pages/game/game";
import { Shop } from "./pages/shop/shop";
import { Auth } from "./pages/auth/auth";
import dark from './themes/dark';
import light from "./themes/light";
import { GlobalStyles } from './globalStyle'
import { Container } from "./components/container";

const App = () => {

    const [ theme, setTheme ] = useState(dark)
    const handleChangeTheme = () => {
        setTheme(theme.title === 'dark' ? light : dark)
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={GlobalStyles}/>
                <Container>
                    <Routes>
                        <Route path="/" element={<Layout  handleChangeTheme={handleChangeTheme}/>}>
                            <Route index element={<Main />} />
                            <Route path="contacts" element={<Contacts />} />
                            <Route path="/example/game" element={<Game />} />
                            <Route path="/example/shop" element={<Shop />} />
                            <Route path="/example/auth" element={<Auth />} />
                        </Route>
                    </Routes>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default App 