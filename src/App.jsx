// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Users from './components/Users'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=':name' element={<Home />} />
        <Route path=':slug' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='dashboard' element={<Dashboard />}/>
      </Route>
    </Routes>
  )
}

export default App

