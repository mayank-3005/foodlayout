
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormComponent from './components/FormComponent'

function App() {
  return (
    <div>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/form" element={<FormComponent/>} />
    </Routes>
  </Router>
  
  
    </div>
  
  );
}

export default App;

