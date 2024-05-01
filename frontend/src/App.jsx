import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './Page/Home'
import Footer from './components/Footer'
import Blog from './Page/Blog';
import NoPage from './Page/NoPage';
import Admin from './Page/Admin';
import ImageUploadForm from './Page/Upload';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/upload" element={<ImageUploadForm />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App