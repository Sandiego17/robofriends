import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If I was using React version17, the code block above would look like this:

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   , document.getElementById('root'));

// But on the latest version of react, it has changed. This is because the .render function is no longer supported on the latest version. It has been replaced with the .createRoot function.

//Also, the lastest way of doing this can also be re-written as so:
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
