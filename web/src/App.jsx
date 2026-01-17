import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './components/Project'
import Contact from './pages/Contact'
import About from './pages/About'
import Layout from './components/Layout'
import './App.css'


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:projectId' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
