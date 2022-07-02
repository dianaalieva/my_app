import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/main/main'
import { Contacts } from './pages/contacts/contacts'
import { Layout } from "./components/layout/layout";
import { Game } from "./pages/game/game";
import { Shop } from "./pages/shop/shop";
import { Auth } from "./pages/auth/auth";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="/example/game" element={<Game />} />
                    <Route path="/example/shop" element={<Shop />} />
                    <Route path="/example/auth" element={<Auth />} />
                </Route>
            </Routes>
        </>
    )
}

export default App 