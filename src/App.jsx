import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
  )
}

export default App
