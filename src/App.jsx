import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './layouts/layout'
import Home from './pages/Home'
import { useAuth } from './context/AuthContext'

function App() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" replace />}
        />
      </Route>
    </Routes>
  )
}

export default App