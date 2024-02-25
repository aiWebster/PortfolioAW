import React from "react";
import { ReactDOM } from "react";
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(<App />);
