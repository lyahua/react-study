import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'

// let arr = [img1, img2, img3]
// let index = 0

// setInterval(() => {
//   index = (index+1)%3
//   console.log('index', index)
//   render()
// }, 1000);

// ReactDOM.render(<App/>, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// function render(){

//   root.render(<img src={arr[index]}/>)
// }

// render()



