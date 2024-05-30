import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from '../pages/LogIn';
import TestPage from '../pages/TestPage';
import SearchId from "../pages/SearchId";
import SearchPw from "../pages/SearchPw";
import SignUp from "../pages/SignUp";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/searchid" element={<SearchId />} />
                <Route path="/searchpw" element={<SearchPw />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;