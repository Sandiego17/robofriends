import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './Robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>
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
