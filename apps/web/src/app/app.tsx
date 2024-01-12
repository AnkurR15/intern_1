// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { Navbar } from '../app/navbar/navbar';
import {Route, Routes } from 'react-router-dom';
import Navbar from '../app/navbar/navbar';
export function App() {
  return (
    <Routes>
        <Route path="/nav" element={<Navbar />} />
    </Routes>
  );
}

export default App;
