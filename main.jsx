import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './src/App.jsx';
import './index.css';

console.log("Neon Arcade starting...");
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root container not found");
}
