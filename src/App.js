
import './App.css';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Projects from './components/Projects';
import contact from './components/contact';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Profile />} /> 
        <Route path="Resume" element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="contact" element={<contact />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;