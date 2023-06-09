import React from 'react';
import {NavLink, Route, Routes, Navigate, createBrowserRouter} from 'react-router-dom';

import App from "./App";
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Chapter from './pages/Chapter';
import Chapters from "./pages/Chapters";
import PageNotFound from "./pages/PageNotFound";
import {useSelectorUser} from "./store/selectors";

const Root = () => {
    const user = useSelectorUser()

    const activeClassName = (name = "is-active") => ({isActive}) => isActive ? name : ""

    return <>
            <nav className="tabs">
                <NavLink className={activeClassName("is-invisible")} to="/"><span>На главную</span></NavLink>
                <NavLink className={activeClassName()} to="/news"><span>Новости</span></NavLink>
                <NavLink className={activeClassName()} to="/profile"><span>Профиль</span></NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="login" element={<Login/>}/>

                    <Route index element={<About/>}/>

                    <Route path="news">
                        <Route index element={<Chapters/>} />
                        <Route path=":id" element={<Chapter/>}/>
                    </Route>

                    <Route path="profile" element={user !== null
                        ? <Profile />
                        : <Navigate replace to="/login" state={{ from: '/profile' }} />}/>

                    <Route path="*" element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </>
}

const router = createBrowserRouter([
    {
        path: "*",
        element: <Root />
    },
])

export default router
