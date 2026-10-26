import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/home"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route Component={Home} path="/"/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
