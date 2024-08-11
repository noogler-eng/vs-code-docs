import Landing from "./pages/Landing";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <div className="bg-black min-h-screen">
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  </div>
    
}

export default App
