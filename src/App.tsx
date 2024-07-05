import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Create } from './pages/Create/page';
// import { NavLink } from 'react-router-dom';
import { Logo } from './components/Img/Logo';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="w-full bg-[#1a1a1e] py-2">
        <div className="container flex items-center px-3">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl pl-[.5625rem]">
              <Logo />
            </div>
          </div>
          {/* <ul className="flex pl-6 space-x-2 text-white">
            <li>
              <NavLink to="/create" className="hover:bg-hoverNavMenu hover:rounded-md px-4 py-2 text-[.975rem]">Create</NavLink>
            </li>
          </ul> */}
        </div>
      </nav>
      <Routes>
        <Route path="/sinistros" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
