// import * as React from 'react';
import ReactDOM from 'react-dom/client';
import WWTest from './class/Wclass'

// console.dir(<WWTest />);
// new WWTest().render=323
console.dir(new WWTest());


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement)
root.render(<WWTest />)
