import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './src/App.jsx';
import './index.css';

console.log("🚀 Neon Arcade initializing...");

const init = () => {
  try {
    const container = document.getElementById('root');
    if (!container) {
      throw new Error("Target container #root not found in the DOM.");
    }
    
    const root = createRoot(container);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log("✅ Neon Arcade rendered successfully.");
  } catch (err) {
    console.error("📂 Neon Arcade Initialization Error:", err);
    document.body.innerHTML = `
      <div style="background: #0f172a; color: white; padding: 40px; font-family: sans-serif; height: 100vh;">
        <h1 style="color: #38bdf8;">Initialization Failed</h1>
        <p>The application could not start. View the console for details.</p>
        <pre style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">${err.message}</pre>
        <button onclick="window.location.reload()" style="background: #38bdf8; color: #0f172a; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold;">Retry</button>
      </div>
    `;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
