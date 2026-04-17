console.log("🚀 Loader Check");
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '<h1 style="color: white; padding: 50px;">Loader OK - Resolving Path...</h1>';
  }
});
