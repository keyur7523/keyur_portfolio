import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './components/Project'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import { ThemeProvider } from './context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'
import { MotionConfig } from 'framer-motion'
import { spring } from './components/ui/physics'
import './App.css'


function App() {

  return (
    <ThemeProvider>
      {/* reducedMotion="user": framer drops transform animations when the OS asks for reduced motion */}
      <MotionConfig reducedMotion='user' transition={spring}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:projectId' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      </MotionConfig>
      <Analytics />
    </ThemeProvider>
  )
}

export default App
