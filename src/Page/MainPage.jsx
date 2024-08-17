import React from 'react'

import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
     const navigate = useNavigate();
     const buttonToUploadPage = () => {navigate('/uploadPage');};
  return (
    <div>
    <div>this is my main page to upload wav file!</div>
    <button onClick={buttonToUploadPage}>click my to upload your files!</button>
    
    </div>
    

  )
}
