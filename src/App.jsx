import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Community from './pages/Community';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/community" element={<Community/>}/>
    </Routes>
  )
}

export default App
