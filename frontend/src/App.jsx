// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App// to have as backup i mess up

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import LandingPage from './pages/LandingPage.jsx';
// import LoginPage from './pages/LoginPage.jsx';
// import RegisterPage from './pages/RegisterPage.jsx';


// function App(){
//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<LandingPage />}/>
//         {/* path="/"
//         element={<LandingPage />} */}

//       <Route path="/login" element={<LoginPage />}/>
//         {/* path="/login"
//         element={<LoginPage />} */}

//       <Route path="/register" element={<RegisterPage />}/>
//         {/* path="/register"
//         element={<RegisterPage />} */}
//     </Routes>
//     </>
//   )
// }v2


import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import CartPage from './pages/CartPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;