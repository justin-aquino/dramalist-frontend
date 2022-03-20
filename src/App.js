import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import axios from "axios"
import Dramas from './components/pages/Dramas';
import DramaDetails from "./components/pages/DramaDetails"
import Drama from "./components/pages/Drama"


function App() {
  const [dramas, setDramas] = useState([])

  // console.log(process.env.REACT_APP_SERVER_URL)

  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/dramas")
      .then(response => {
        setDramas(response.data)
      })
  }, [dramas])
  return (
    <div className="App">
      <Routes>
        <Route path="/dramas" element={<Dramas dramas={dramas} />} />
        <Route path="/dramas/:id" element={<Drama />} />
        
        

      </Routes>
    </div>
  );
}

export default App;
