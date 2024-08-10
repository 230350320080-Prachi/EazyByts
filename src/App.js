import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import GeneralRoom from './components/GeneralRoom';

function App() {
    return (
        <Router>
            <Routes>
                {/* Default route */}
                <Route path="/" element={<Login />} />
                
                {/* Other routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/general-room" element={<GeneralRoom />} />
            </Routes>
        </Router>
    );
}

export default App;
