import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
// import Header from "./components/Header"

function App() {
  return (
    <>
      <Router>
          <div className="container" >
            <Header />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
      </Router>
    </>
  )
}

export default App