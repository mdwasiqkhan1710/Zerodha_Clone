import React from 'react';
import './index.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

import '../src/App.css'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//         <BrowserRouter>
//             <Routes path="/" element={<Home />} />
//         </BrowserRouter>
//     );

    function App() {
        return (
          <>
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </>
        );
      }

export default App;      