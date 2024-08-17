import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { MainPage } from './Page/MainPage';
import { UploadPage } from './Page/UploadPage';
import { DownloadPage } from './Page/DownloadPage';

export const App = () => {
  
  return (
    <div>
      <header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/uploadPage" element={<UploadPage/>} />
          <Route path="/downloadPage" element={<DownloadPage />} />
        </Routes>
      </BrowserRouter>
    
    
    <footer />
    </div>
  );
}
export default App

