import { useEffect, useState } from "react";
import PredictForm from "./components/PredictForm";
import TrainForm from "./components/TrainForm";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [theme, setTheme] = useState('dracula');
  const toggleTheme = () => {
    setTheme(theme === 'dracula' ? 'valentine': 'dracula');
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div>
      <header className="flex justify-center items-center">
      <TypeAnimation
      className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600 m-10 h-10"
      sequence={[
        'Loan prediction',
        1000, 
        'Group 07',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}/>
      </header>
      <div className="dropdown mb-24 flex justify-center items-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Theme
          <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52" onClick={toggleTheme}>
          <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dracula"/></li>
          <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="valentine"/></li>
        </ul>
      </div>
      <div className="grid grid-cols-2 divide-x">
        <div><TrainForm/></div>
        <div><PredictForm/></div>
      </div>
      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      stacked
      />
    </div>
  );
}

export default App;
