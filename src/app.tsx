import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/main/main'
import { Contacts } from './pages/contacts/contacts'
import { Layout } from "./components/layout/layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="contacts" element={<Contacts />} />
                </Route>
            </Routes>
        </>
    )
}

export default App 