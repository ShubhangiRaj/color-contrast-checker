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

// export default App

import { useState } from "react";
import ColorInput from "./components/ColorInput";
import ContrastResult from "./components/ContrastResult";

function App() {
  const [fgColor, setFgColor] = useState("#000000"); // Default black
  const [bgColor, setBgColor] = useState("#ffffff"); // Default white

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <ColorInput fgColor={fgColor} setFgColor={setFgColor} bgColor={bgColor} setBgColor={setBgColor} />
      <ContrastResult fgColor={fgColor} bgColor={bgColor} />
    </div>
  );
}

export default App;
