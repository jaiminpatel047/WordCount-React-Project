import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// app.use(express.static(__dirname));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });