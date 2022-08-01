import {createRoot} from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);